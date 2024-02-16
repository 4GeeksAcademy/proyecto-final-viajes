import React from "react";
import { Navbar, NavbarBrand, Container, NavbarToggle, NavbarCollapse, Nav, NavLink, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        navigate("/")
    }
    return (
        <Navbar expand="lg" className="bg-dark w-100 navbar-light" sticky="top">
            <Container className="d-flex align-items-center justify-content-between">
                <div>
                    <NavbarBrand href="/" className="d-flex p-3 align-items-center justify-content-between">
                        <Image src="https://i.ibb.co/DRhxdbr/logo.png" alt="Lohotipo" width={"100px"}/>
                        <h4 className="nombre menu text-light">PaTuristear</h4>
                    </NavbarBrand>
                </div>
                <div>
                    <NavbarToggle aria-controls="basic-navbar-nav" className="border border-light justify-self-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </NavbarToggle>
                    <NavbarCollapse id="basic-navbar-nav" className="justify-self-end">
                        <Nav>
                            <NavLink href="/" className="text-light px-4 menu">INICIO</NavLink>
                            {token ? <NavLink href="/misrutas" className="text-light text-center px-4 menu">MIS RUTAS</NavLink> : <NavLink href="/registrarme" className="text-light px-4 menu">REGISTRARME</NavLink> }
                            {token ? <NavLink href="/" className="text-light px-4 menu text-center" onClick={handleLogout}>CERRAR SESION</NavLink> : <NavLink href="/iniciarsesion" className="text-light px-4 menu text-center">INICIAR SESION</NavLink>}
                        </Nav>
                    </NavbarCollapse>
                </div>
                
            </Container>
        </Navbar>
    )
}

export default Header