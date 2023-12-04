import '../stylesComponents/tarjetas.css'
import { ItemCounter } from "./itemCounter";
import { useContext } from 'react';
import { CartContex } from '../context/cartContex';
export const ItemDetail = ({item}) => {

    const {onAdd} = useContext(CartContex)
    const Add = (quantity) =>{
        
        onAdd(item,quantity)
    }
    return (
    <>
    <div style={{border:'2px solid black',width:'500px',display:'flex',flexDirection:'column',margin:'2em', borderRadius:'20px'}}>
            <h1 style={{fontFamily:'cursive',textAlign:'center'}}>{item.title}</h1>
            <div style={{display:'flex',justifyContent:'center'}}>
            <img src={item.pictureUrl} width={"400px"}/>
            </div>


            <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
            <h4 style={{fontWeight:'normal',textAlign:'center',fontSize:'20px',fontFamily:'cursive'}}>Stock de productos: {item.stock}</h4>
            <ItemCounter onAdd={Add} stock={item.stock} initial={1}/> 

            </div>
    </div>
    </>
    )
}