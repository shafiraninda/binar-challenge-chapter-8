import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../../assets/console.png';

function NavbarMain(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="38"
                    className="d-inline-block align-top"
                />{' '}
                    Player Administration</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#history">History</Nav.Link>
                        <Nav.Link href="#rank">Player Rank</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="profile">
                            Hai, Administrator
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMain;