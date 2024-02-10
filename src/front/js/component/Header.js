import React from "react";
import { Navbar, NavbarBrand, Container, NavbarToggle, NavbarCollapse, Nav, NavLink } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-dark w-100 navbar-light">
            <Container className="d-flex align-items-center justify-content-between">
                <div>
                    <NavbarBrand href="/" className="d-flex p-3 align-items-center justify-content-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="50" fill="currentColor" className="avion bi bi-airplane text-light display-6" viewBox="0 0 16 16">
                            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599" />
                        </svg>
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
                            <NavLink href="/" className="text-light px-4 menu">REGISTRARME</NavLink>
                            <NavLink href="/" className="text-light px-4 menu">INICIAR SESION</NavLink>
                        </Nav>
                    </NavbarCollapse>
                </div>
                
            </Container>
        </Navbar>
    )
}

export default Header