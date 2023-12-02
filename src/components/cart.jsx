import React, { useState } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { CartContex } from "../context/cartContex";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import CheckOut from "./checkOut";

const Cart = () => {
    const { clear, items,onRemove } = useContext(CartContex);
    const Navigate = useNavigate();
    // const [comprador,setComprador] = useState({
    //     name:'1',
    //     phone:'2',
    //     email:'3',
    // })

    // const handleChange = ((event)=>{
    //     setComprador(comprador =>{
    //         return{
    //             ...comprador,
    //             [event.target.name]:event.target.value,
    //         }
    //     })
    // })
    if (!items.length) {

        return (
            <Container className="mt-4">
            <h2>Comprame algo por favor</h2>;
            <button onClick={()=>Navigate("/")}>volve al inicio</button>
            </Container>
            )
    }
            
    
    return (
        <Container className="mt-4">
            <h1>Carrito</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>
                                <img src={item.pictureUrl} width={"200px"} alt="" />
                            </td>
                            {/* <td>{item.price}</td> */}

                            <td onClick={()=>onRemove(item.id)} >X</td>

                        </tr>
                    ))}
                </tbody>
            </Table>

            <button onClick={clear}>Vaciar carrito</button>

            <CheckOut />
        </Container>
    );
};

export default Cart;
