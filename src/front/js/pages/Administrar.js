import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Administrar = () => {
    const {store, actions} = useContext(Context)
    const token = localStorage.getItem("token")
    const rol = localStorage.getItem("rol")

    if(token === store.token && rol === "1") {
        return (
            <div className="bg-black d-flex align-items-center" style={{"height": "100vh"}}>
                <Container>
                    <Row>
                        <Col className="justify-content-center align-items-center">
                            <Button href="/admin/paises" className="w-100 my-3" variant="secondary">Paises</Button>
                        </Col>
                        <Col className="justify-content-center align-items-center">
                            <Button href="/admin/ciudades" className="w-100 my-3" variant="secondary">Ciudades</Button>
                        </Col>
                        <Col className="justify-content-center align-items-center">
                            <Button href="/admin/rutas" className="w-100 my-3" variant="secondary">Rutas</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }else {
		window.location.replace("https://ideal-memory-qwq5w5556vv2xqpj-3000.app.github.dev/")
	}
}

export default Administrar