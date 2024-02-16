import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Context } from "../store/appContext";

const Administrar = () => {
    const {store, actions} = useContext(Context)

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
}

export default Administrar