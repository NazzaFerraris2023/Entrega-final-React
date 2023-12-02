import '../assets/cart-shopping-fast-svgrepo-com.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{ faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'



export const CartWidget = () => {
    return(
        <Link to={'/cart'}>
        <div className="Contenedor-Widget">
            <div>0</div>
            <FontAwesomeIcon icon={faCartShopping} className='carrito'/>
        
        </div>
        </Link>
    )
}