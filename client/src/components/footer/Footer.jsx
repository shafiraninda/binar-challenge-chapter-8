import React from 'react';
import { Navbar, Container } from "react-bootstrap";
import logo from '../assets/console.png';

function Footer() {
  return (
    <div>
      <Navbar sticky="bottom">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              className="d-inline-block align-top"
            />{' '}
            Player Administrator
          </Navbar.Brand>
          <Navbar><p>Copyright &copy; 2022</p></Navbar>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;