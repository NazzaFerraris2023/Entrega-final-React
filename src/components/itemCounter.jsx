import React from 'react'

export const ItemCounter = ({onAdd}) => {
    return (
        <>
        <p>-</p>
        <mark></mark>
        <p>+</p>

        <button onClick={onAdd}>Agregar al carrito</button>
        </>
    )
}

 