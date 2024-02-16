import React, { useContext, useState } from "react";
import { Button, Carousel, CarouselCaption, CarouselItem, Form, FormGroup, FormSelect, Image } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Jumbotron = () => {
    const { store, actions } = useContext(Context)
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState(undefined)
    const token = localStorage.getItem("token")

    const handleSelected = (e) => {
        actions.getCiudadPorPais(e.target.value)
    }
    const handleCiudadSeleccionada = (e) => {
        setCiudadSeleccionada(e.target.value)
    }
    
    return (
        <>
            <div className="w-75 mx-auto pt-3">
                <Carousel className=" border border-light border-5">
                    {store.rutas.map((ruta, id) => (
                        <CarouselItem key={id}>
                        <Image src={ruta.imagen} alt="España" width={"100%"} height={300} />
                        <CarouselCaption>
                            <h3>{ruta.nombre_de_ruta}</h3>
                        </CarouselCaption>
                    </CarouselItem>
                    ))}
                </Carousel>
                <Form className="d-flex flex-column flex-md-row mt-3 mx-auto align-items-center justify-content-around">
                    <FormGroup className="w-25 mb-2">
                        <FormSelect onChange={e => handleSelected(e)} className="busqueda">
                            <option>PAIS</option>
                            {store.paises.map((pais, id) => (
                                <option key={id}  value={pais.id}>{pais.nombre_de_pais}</option>
                            ))}
                        </FormSelect>
                    </FormGroup>
                    <FormGroup className="w-25 mb-2">
                        <FormSelect onChange={e => handleCiudadSeleccionada(e)} className="busqueda">
                            <option>CIUDAD</option>
                            {store.ciudades.map((ciudad, id) => (
                                <option value={ciudad.id} key={id}>{ciudad.nombre_de_ciudad}</option>
                            ))}
                        </FormSelect>
                    </FormGroup>
                    <FormGroup className="w-25 mb-2">
                        {token ?
                            <Link to={"/tours/" + ciudadSeleccionada}>
                                <Button variant="secondary" className="busqueda">BUSCAR</Button>
                            </Link> : 
                            <Link to={"/registrarme"}>
                                <Button variant="secondary" className="busqueda w-100">Registrarme</Button>
                            </Link>
                        }
                    </FormGroup>
                </Form>
            </div>
        </>
    )
}

export default Jumbotron