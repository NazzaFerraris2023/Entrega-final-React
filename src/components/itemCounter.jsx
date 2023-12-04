import React from 'react'
import { useState } from 'react'

export const ItemCounter = ({onAdd,stock,initial}) => {
    
    const [count,setCount] = useState(typeof initial === 'number' ? initial : 0)
    const handleIncreaseCount = () =>{
        if (stock>count){
            setCount(prev => prev + 1)//puedo seguir agregando productos
        }
        
    }

    const handleDecreaseCount = () => {
        if (count> 1){
            setCount(prev => prev - 1)//puedo seguir restando productos
        }
    }
    const handleAdd = () =>{
        onAdd(count)
        setCount(initial) 
    }
    return (
        <> 
        <div style={{display:'flex',justifyContent:'center'}}>
            <p  style={{fontSize:'25px', cursor:'pointer',color:'red',marginRight:".5em"}}onClick={handleDecreaseCount}>-</p>
            <input value={count} style={{borderRadius:'20px',textAlign:'center',marginTop:'.7em'}}></input>
            <p style={{fontSize:'25px', cursor:'pointer',color:'red',marginLeft:'.5em'}} onClick={handleIncreaseCount}>+</p>
        </div>

        <button onClick={handleAdd} style={{backgroundColor:'transparent',border:'none',cursor:'pointer',fontSize:'18px',marginTop:'1em',fontFamily:'cursive'}}>Agregar al carrito</button>
        </>
    )
}

 