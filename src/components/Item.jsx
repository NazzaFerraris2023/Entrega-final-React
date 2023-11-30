import { Link } from 'react-router-dom';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../stylesComponents/tarjetas.css'



const Item = ({ item }) => {
    return (
        <Card style={{ width: '18rem' }} className='contenedor-tarjetas'>
            <Card.Img variant="top" src={item.pictureUrl} className='tarjeta-img' />
            <Card.Body className='tarjeta-body'>
                <Card.Title className='titulo-tarjeta'>{item.title}</Card.Title>
                <Card.Text className='texto-tarjeta'>
                    {item.description}
                </Card.Text>
                <Link to={`/items/${item.id}`}> <Button variant="primary" className='btn-tarjeta'>Comprar</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default Item

