import { NavLink } from "react-router-dom"
import { CartWidget } from "./cartWidget"
import "../stylesComponents/navBar.css"
import { Container } from "react-bootstrap"



export const NavBar = ()=>{
    return(
        <NavBar bg="dark">
            <Container>
                <NavBar.Brand href='#'>DigitalGamesz</NavBar.Brand>
                <Nav className='nav-bar'>
                    <NavLink>Home</NavLink>
                    <NavLink to={'category/anteojos'}>consolas</NavLink>
                    <NavLink to={'category/controles'}>controles</NavLink>
                </Nav>
                <CartWidget/>
            </Container>

        </NavBar>
    )
} 


// export const NavBar =()=>{
//     return (
//     <NavBar>
//         <div className="Contenedor-Nav-Bar">
//             <h3>DigitalGamesz</h3>
//                 <Nav className="nav-bar">
                    
//                         <NavLink to="category/home">Home</NavLink>
//                         <NavLink to="category/consolas">Consolas</NavLink>
                    
//                 </Nav>
//                 <CartWidget />
//         </div>
//     </NavBar>
        
//     )
// }