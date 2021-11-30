import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/logo/logo.png'
const Navigation = () => {
    return (
        <div>
            <Navbar className="bg-black" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="text-warning"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" className="text-danger" >Home</Nav.Link>
                            <Nav.Link href="#about" className="text-warning">About</Nav.Link>
                            <Nav.Link href="#projects" className="text-warning">portfolio</Nav.Link>
                            <Nav.Link href="#service" className="text-warning">service</Nav.Link>
                            <Nav.Link href="/blog" className="text-warning">Blog</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;