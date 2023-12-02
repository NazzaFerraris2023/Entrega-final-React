import { NavLink } from "react-router-dom"
import { CartWidget } from "./cartWidget"
import "../stylesComponents/navBar.css"
import { Container } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"


export const NavBar = ()=>{
    return(
        <Navbar bg="dark">
            <Container className="Contenedor-Nav-Bar">
                <Navbar.Brand href='#' className="logo">DigitalGamesz</Navbar.Brand>
                <Nav className='nav-bar'>
                <NavLink to='/' className='nav-link'>Home</NavLink>
<NavLink to='/category/consolas' className='nav-link'>Consolas</NavLink>
<NavLink to='/category/controles' className='nav-link'>Controles</NavLink>
                </Nav>
                <CartWidget/>
            </Container>

        </Navbar>
    )
} 