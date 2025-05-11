import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import PlantHealthCheck from "../components/plantHealthCheck";

const NavbarComp = () => {
    return (
      <Router>
      <Navbar expand="lg" bg="primary" variant="dark" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Project Leaf</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as= {Link} to ="/home">Home</Nav.Link>
            <Nav.Link as= {Link} to ="/about">About</Nav.Link>
            <Nav.Link as= {Link} to ="/contact">Contact Us</Nav.Link>
            <Nav.Link as= {Link} to ="/test">Check Plant Health</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<PlantHealthCheck />} />
          </Routes>
    </Router>

    )
}

export default NavbarComp