import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Table, Row } from "react-bootstrap";
import { Context } from "../store/appContext";

const Paises = () => {
    const { store, actions } = useContext(Context)
    const token = localStorage.getItem("token")

    const handleDelete = (paisId) => {
        Swal.fire({
			title: "¿Estás seguro que deseas eliminar este pais?",
			text: "¡Esta acción no se puede revertir!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Eliminar"
		}).then((result) => {
			if (result.isConfirmed) {
				actions.eliminarPais(paisId)
			Swal.fire({
				title: "Deleted!",
				text: "Your file has been deleted.",
				icon: "success"
			});
			}
	  });
    }

    useEffect(() => {
        actions.getPaises()
    }, [])

    if (token) {
        return (
            <Container fluid className="bg-black pt-4" style={{ "height": "100vh" }}>
                <h1 className="text-light text-center">Paises</h1>
                <Button href="/crearPais" variant="outline-success" className="w-100 my-3 mx-auto">Agregar un país</Button>
                <Table striped bordered hover className="w-50 mx-auto">
                    <thead>
                        <tr>
                            <th className="text-light text-center">Id</th>
                            <th className="text-light text-center">País</th>
                            <th className="text-light text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.paises.map((pais, id) => (
                            <tr key={id}>
                                <td className="text-light text-center">{pais.id}</td>
                                <td className="text-light text-center">{pais.nombre_de_pais}</td>
                                <td>
                                    <Row>
                                        <Col className="d-flex justify-content-center align-items-center">
                                            <Button onClick={() => handleDelete(pais.id)} variant="outline-danger">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                </svg>
                                            </Button>
                                        </Col>
                                        <Col className="d-flex justify-content-center align-items-center">
                                            <Button variant="outline-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                </svg>
                                            </Button>
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                        ))}
                        <Button variant="outline-primary" href="/admin" className="my-5">Volver</Button>
                    </tbody>
                </Table>
            </Container>
        )
    }else {
		window.location.replace("https://ideal-memory-qwq5w5556vv2xqpj-3000.app.github.dev/")
	}
    
}

export default Paises