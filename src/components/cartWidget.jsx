import '../assets/cart-shopping-fast-svgrepo-com.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{ faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContex } from '../context/cartContex'


export const CartWidget = () => {
    const { items } = useContext(CartContex)
    
    const total =  items.reduce((acc,valorActual)=>acc + valorActual.quantity, 0)
    return(
        <Link to={'/cart'}>
        <div className="Contenedor-Widget">
            <div>{total}</div>
            <FontAwesomeIcon icon={faCartShopping} className='carrito'/>
        
        </div>
        </Link>
    )
}