import '../assets/cart-shopping-fast-svgrepo-com.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{ faCartShopping } from "@fortawesome/free-solid-svg-icons"



export const CartWidget = () => {
    return(
        <div className="Contenedor-Widget">
            <div>0</div>
            <FontAwesomeIcon icon={faCartShopping} className='carrito'/>
        
        </div>
    )
}
