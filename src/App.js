import React from 'react';
import logo from './aviso.jpg';
import './App.scss';
import {Col, Container, Jumbotron, Nav, Navbar, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";

function App() {
    return (
        <>
            <Navbar style={{background: "#04317c"}}>
                <Container className="d-flex h-100">

                    <Nav>

                    </Nav>


                    <Nav>
                        <Nav.Item>

                        </Nav.Item>
                        <Nav.Item className="mr-auto align-items-center">
                            <img className="img-fluid" src="logoviana.png" style={{minWidth: "100px", maxHeight: "60px"}}
                                 alt="Viana Transportes"/>

                        </Nav.Item>
                    </Nav>


                    <Nav>
                        <Nav.Item>

                        </Nav.Item>
                    </Nav>

                </Container>
            </Navbar>
            <Container>
                <Jumbotron>

                    <img  src={logo} className="img-fluid mb-2"/>


                    <p className={"mt-2"}>
                        Cuidar de nuestros clientes, colaboradores y evitar la propagación del COVID-19 son nuestras prioridades, por lo tanto hacemos un llamado para que todos juntos reforcemos las medidas de higiene personal y tratemos de mantener la distancia fisica entre personas. Agradecemos la confianza depositada en nosotros y estamos seguros que con paciencia superaremos este nuevo desafío juntos.
                    </p>
                </Jumbotron>
            </Container>

            <footer className="page-footer font-small unique-color-dark mt-4">

                <div style={{backgroundColor: "#04317C"}}>
                    <Container>
                        <Row className=" py-4 d-flex align-items-center">


                            <Col className="text-center text-md-left mb-4 mb-md-0">
                                <h6 style={{color:"white"}} className="mb-0" >Siguenos en nuestras redes
                                    sociales!</h6>
                            </Col>

                            <Col className="text-center text-md-right">


                                <a className="fb-ic" href="https://www.facebook.com/vianatransportes">
                                    <FontAwesomeIcon icon={faFacebook} style={{color:"white"}}  className="white-text mr-4" />
                                </a>

                                <a className="ins-ic" href="https://www.instagram.com/vianatransportes">
                                    <FontAwesomeIcon icon={faInstagram} style={{color:"white"}}  className="white-text mr-4"/>
                                </a>

                            </Col>

                        </Row>


                    </Container>
                </div>


                <Container className=" text-center text-md-left mt-5">


                    <Row className="mt-3">

                        <Col className="mx-auto mb-4">


                            <h6 align="center" className="text-uppercase font-weight-bold">Tegucigalpa</h6>
                            <hr/>
                                <p align="center">Gasolinera Puma Cascadas
                                    <br/>
                                        Boulevard Fuerzas Armadas
                                    <br/>
                                        Tel. (504) 2280-4900
                                </p>
                        </Col>

                        <Col className="mx-auto mb-4">
                            <h6 align="center" className="text-uppercase font-weight-bold">San Pedro Sula</h6>
                            <hr/>
                                <p align="center">Gran Central Metropolitana<br/>Boulevard del Sur<br/>Tel. (504)
                                    2516-2210</p>
                                <br/>
                                <p align="center">
                                    Plaza Geousur
                                    <br/>
                                    Avenida Circunvalacion a un costado de hotel Holiday
                                    Inn
                                    <br/>
                                    Tel. (504) 2516-1649
                                </p>

                        </Col>

                        <Col className=" mx-auto mb-4">

                            <h6 align="center" className="text-uppercase font-weight-bold">La Ceiba</h6>
                            <hr/>
                                <p align="center">Gasolinera Puma Miramar
                                    <br/>
                                    Boulevard 15 de Septiembre
                                    <br/>Tel. (504)
                                    2441-2330</p>

                        </Col>

                        <Col className=" mx-auto mb-4">


                            <h6 align="center" className="text-uppercase font-weight-bold">Contacto</h6>
                            <hr/>
                                <p>
                                    <i className="fa fa-home mr-3"/>Tegucigalpa, Honduras</p>
                                <p>
                                    <i className="fa fa-envelope mr-3"/> info@vianatransportes.com</p>
                                <p>
                                    <i className="fa fa-phone mr-3"/>(504) 2280-4900</p>

                        </Col>


                    </Row>


                </Container>

                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href=""> Transportes Viana</a>
                </div>


            </footer>
        </>
    );
}

export default App;
