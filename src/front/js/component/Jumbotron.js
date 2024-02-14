import React, { useContext, useState } from "react";
import { Button, Carousel, CarouselCaption, CarouselItem, Form, FormGroup, FormSelect, Image } from "react-bootstrap";
import { Context } from "../store/appContext";

const Jumbotron = () => {
    const { store, actions } = useContext(Context)
    const [ciudades, setCiudades] = useState([])
    const handleSelected = (e) => {
        actions.getCiudadPorPais(e.target.value)
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
                        <FormSelect className="busqueda">
                            <option>CIUDAD</option>
                            {store.ciudades.map((ciudad, id) => (
                                <option key={id}>{ciudad.nombre_de_ciudad}</option>
                            ))}
                        </FormSelect>
                    </FormGroup>
                    <FormGroup className="w-25 mb-2">
                        <Button variant="secondary" className="busqueda">BUSCAR</Button>
                    </FormGroup>
                </Form>
            </div>
            
        </>
    )
}

export default Jumbotron