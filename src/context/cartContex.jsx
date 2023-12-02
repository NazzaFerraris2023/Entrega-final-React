import React, { createContext, useState } from 'react'

export const CartContex = createContext();

export const CartProvider = ({children}) => {
    const [items,setItems] = useState([])

    const clear = () => setItems([])

    const onAdd = (item)=>
        setItems((prev)=>{return[ ...prev,item]
        
    })


    const onRemove = (id)=>{
        const filterItems = items.filter(item=>item.id!==id)
        setItems(filterItems)
    }

    console.log(items)
    return (
        <CartContex.Provider value={{items,clear,onAdd, onRemove}}>
        {children}
        </CartContex.Provider>)


}



