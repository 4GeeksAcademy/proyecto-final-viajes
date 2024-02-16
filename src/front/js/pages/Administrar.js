import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Administrar = () => {
    return (
        <div className="bg-black">
            <Container>
                <Row>
                    <Col className="justify-content-center align-items-center">
                        <Button className="w-100 my-3" variant="secondary">Paises</Button>
                    </Col>
                    <Col className="justify-content-center align-items-center">
                        <Button className="w-100 my-3" variant="secondary">Ciudades</Button>
                    </Col>
                    <Col className="justify-content-center align-items-center">
                        <Button className="w-100 my-3" variant="secondary">Rutas</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Administrar