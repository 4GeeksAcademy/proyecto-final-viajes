import React, { useState } from "react";
import "../../styles/home.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModalDialog } from "react-bootstrap";
import ModalHeader from "react-bootstrap";
import ModalFooter from "react-bootstrap";
import ModalBody from "react-bootstrap";
import ModalTitle from "react-bootstrap";


export const GaleriaTours = () => {

	const [show, setShow] = useState(false)
	const handleShow = () => setShow(true)
	const handleClose = () => setShow(false)

	return (
		<div className="bg-black">

			<p className="RUTAS menu text-light">RUTAS DISPONIBLES</p>

			<div className="d-flex justify-content-end px-5 mx-5">
				<p className="ordenar bg-light">
					<i class="fa-solid fa-list"></i>
					ORDENAR
				</p>
			</div>

			<div className="card-group row menu mx-auto py-5">
				<div className="col-4 d-flex RUTA">
					<div className="card bg-black" onClick={handleShow} >
						<img src="https://media.istockphoto.com/id/1285957020/es/foto/explosi%C3%B3n-de-una-bombilla-el%C3%A9ctrica-tradicional-disparo-tomado-a-alta-velocidad.jpg?s=612x612&w=0&k=20&c=TC2l24YAi38mV1AYLAX0vVz3GLJPqop8b_g_ZUD-DyM=" className="card-img-top border border-white " alt="fotico" />
						<div className="card-body">
							<h4 className="card-title text-center text-light">PLAZA MAYOR</h4>
							<p className="card-text text-light pt-4">Distancia: </p>
							<p className="card-text text-light">Tiempo: </p>
						</div>
					</div>
				</div>

				<div className="col-4 d-flex RUTA">
					<div className="card bg-black" onClick={handleShow}>
						<img src="https://media.istockphoto.com/id/1285957020/es/foto/explosi%C3%B3n-de-una-bombilla-el%C3%A9ctrica-tradicional-disparo-tomado-a-alta-velocidad.jpg?s=612x612&w=0&k=20&c=TC2l24YAi38mV1AYLAX0vVz3GLJPqop8b_g_ZUD-DyM=" className="card-img-top border border-white" alt="fotico" />
						<div className="card-body">
							<h4 className="card-title text-center text-light">PLAZA MAYOR</h4>
							<p className="card-text text-light pt-4">Distancia: </p>
							<p className="card-text text-light">Tiempo: </p>
						</div>
					</div>
				</div>
				<div className="col-4 d-flex RUTA">
					<div className="card bg-black" onClick={handleShow}>
						<img src="https://media.istockphoto.com/id/1285957020/es/foto/explosi%C3%B3n-de-una-bombilla-el%C3%A9ctrica-tradicional-disparo-tomado-a-alta-velocidad.jpg?s=612x612&w=0&k=20&c=TC2l24YAi38mV1AYLAX0vVz3GLJPqop8b_g_ZUD-DyM=" className="card-img-top border border-white" alt="fotico" />
						<div className="card-body">
							<h4 className="card-title text-center text-light">PLAZA MAYOR</h4>
							<p className="card-text text-light pt-4">Distancia: </p>
							<p className="card-text text-light">Tiempo: </p>
						</div>
					</div>
				</div>
			</div>

			{/* MODAL */}

			<Modal show={show} onHide={handleClose} className="row">
				<Modal.Header>
					<Modal.Title >PLAZA MAYOR</Modal.Title>
				</Modal.Header>
				<Modal.Body className="col-6">
					L o r e m i p s u m d o l o r s i t a m e t ,
					c o n s e c t e t u r a d i p i s c i n g e l i t , s e d
					d o e i u s m o d t e m p o r i n c i d i d u n t
					u t l a b o r e e t d o l o r e m a g n a
					a l i q u a . U t e n i m a d m i n i m
					v e n i a m , q u i s q u i o f f i c i a
					d e s e r u n t m o l l i t a n i m i d e s t
					l a b o r u m . L o r e m i p s u m d o l o r s i t
					a m e t , c o n s e c t e t u r a d i p i s c i n g
					e l i t , s e d d o e i u s m o d t e m p o r
					i n c i d i d u n t u t l a b o r e e t d o l o r e
					m a g n a a l i q u a . U t e n i m a d m i n i m
					v e n i a m , q u i s q u i o f f i c i a
					d e s e r u n t m o l l i t a n i m i d e s t
					l a b o r u m .
				</Modal.Body>
				<Modal.Footer className="d-flex justify-content-center">
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
