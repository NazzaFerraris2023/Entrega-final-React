
import { CartWidget } from "./cartWidget"
import '../components/navBar.css'
export const NavBar =()=>{
    return (
    <div className="Contenedor-Nav-Bar">
        <div>
            <h3>DigitalGames</h3>
        </div>
        
        <div>
            <nav className="nav-bar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Catalogo de juegos</a></li>
                    <li><a href="#">Suscripciones</a></li>
                </ul>
            </nav><CartWidget />
        </div>
    </div>
        
    )
}