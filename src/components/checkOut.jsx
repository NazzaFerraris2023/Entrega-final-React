import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartContex } from '../context/cartContex';



const initialValues = {
    name: '',
    phone: '',
    email: '',
}
function CheckOut() {
    const {items,clear} = useContext(CartContex)
    const [comprador, setComprador] = useState(initialValues);

    const sendOrder =()=>{
        const total = items.reduce((acc,item)=>acc+item.price,0)
        const order = {
            comprador,
            items,
            total
        }
        const db = getFirestore()
        const orderCollection = collection(db,"orders")
        addDoc(orderCollection,order).then(({id})=>{
            if(id){
                alert("La orden " +""  +id+ "" + " se realizo con exito")
                setComprador(initialValues)
                clear()
            }
        })
    }
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={comprador.email} onChange={e => setComprador({ ...comprador, email: e.target.value })} required/>

                {/* onChange={handleChange} name='email'       */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name:</Form.Label>

                <Form.Control type="text" placeholder="Your Name" value={comprador.name} onChange={e => setComprador({ ...comprador, name: e.target.value })} required/>
                {/* onChange={handleChange} name='Name'       */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone:</Form.Label>
                <Form.Control type="number" placeholder="+54" value={comprador.phone} onChange={e => setComprador({ ...comprador, phone: e.target.value })} required/>

                {/* onChange={handleChange} name='phone'       */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" onClick={sendOrder}>
                Enviar
            </Button>
        </Form>
    );
}


export default CheckOut;
