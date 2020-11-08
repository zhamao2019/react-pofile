import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand>Bing's Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;