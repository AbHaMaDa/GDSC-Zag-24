import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

const AppNavbar=()=> {
  const cartSlice= useSelector(state=>state.cartSlice);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className='navbar-brand' to="/">Cart-App</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Products</Link>
            <Link  className='nav-link'to="cart">Cart-{cartSlice.length} </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;