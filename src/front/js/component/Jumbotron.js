import React from "react";
import { Button, Carousel, CarouselCaption, CarouselItem, Form, FormGroup, FormSelect, Image } from "react-bootstrap";

const Jumbotron = () => {
    return (
        <>
            <div className="w-75 mx-auto pt-3">
                <Carousel className=" border border-light border-3 rounded">
                    <CarouselItem>
                        <Image src="https://images.pexels.com/photos/4472152/pexels-photo-4472152.jpeg?auto=compress&cs=tinysrgb&w=600" alt="España" width={"100%"} height={300}/>
                        <CarouselCaption>
                            <h3>España</h3>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem>
                        <Image src="https://images.pexels.com/photos/1547735/pexels-photo-1547735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Portugal" width={"100%"} height={300}/>
                        <CarouselCaption>
                            <h3>Portugal</h3>
                        </CarouselCaption>
                    </CarouselItem>
                </Carousel>
                <Form className="d-flex flex-column flex-md-row mt-3 mx-auto align-items-center justify-content-around">
                    <FormGroup className="w-25">
                        <FormSelect className="busqueda">
                            <option>PAIS</option>
                        </FormSelect>
                    </FormGroup>
                    <FormGroup className="w-25">
                        <FormSelect className="busqueda">
                            <option>CIUDAD</option>
                        </FormSelect>
                    </FormGroup>
                    <Button variant="secondary" className="busqueda">BUSCAR</Button>
                </Form>
            </div>
            
        </>
    )
}

export default Jumbotron