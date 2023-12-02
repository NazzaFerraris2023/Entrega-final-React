import '../stylesComponents/tarjetas.css'
import { ItemCounter } from "./itemCounter";
import { useContext } from 'react';
import { CartContex } from '../context/cartContex';
export const ItemDetail = ({item}) => {

    const {onAdd} = useContext(CartContex)
    const Add = () =>{
        onAdd(item)
    }
    return (
    <>
    <h1>{item.title}</h1>
    <img src={item.pictureUrl} width={"400px"}/>
    <ItemCounter onAdd={Add}/> 
    <div></div>
    </>
    )
}