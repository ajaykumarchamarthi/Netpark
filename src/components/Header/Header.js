import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Info from "./Info";

function Header() {
  return (
    <>
      <Info />
      <Navbar bg="light" expand="md">
        <Container className="py-2">
          <Navbar.Brand href="#home">Net Park</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="mx-md-3" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="mx-md-3" href="#link">
                About Us
              </Nav.Link>
              <NavDropdown
                className="mx-md-3"
                title="Products"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Nylon Multifilament Net
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  HDPE Twisted Nets
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Nylon Multifilament Nets
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="mx-md-3" href="#contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
