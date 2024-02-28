import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Nav.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from "react-bootstrap";
import logoImage from "../../images/LogoACL.png";

const AppNavbar: React.FC = () => {
    return (

        <Navbar fixed="top" className="bg-body-tertiary" expand="lg">
            <Container fluid id="nav">
                <Navbar.Brand href="#home" id="nav">
                    <Image
                        alt=""
                        src={logoImage}
                        className="d-inline-block align-top" 
                        id="imgLogo"/>{' '}
                        
                    CAT
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default AppNavbar