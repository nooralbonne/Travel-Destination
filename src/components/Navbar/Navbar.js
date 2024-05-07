import React from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBBtn, MDBInputGroup } from 'mdb-react-ui-kit';
import './Navbar.css';

export default function Navbar() {
  return (
    <MDBNavbar dark bgColor='dark' className="fixed-top navbar-width">
      <MDBContainer fluid style={{ margin: '10px 30px 0px 10px' }}>
        <MDBNavbarBrand style={{ fontSize: '30px', margin: '-10px 30px 0px 0px' }}>TravelEase</MDBNavbarBrand>
        <Link to="/" className="navbar-link">Home</Link>
        {/* Add other navigation links as needed */}
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control' placeholder="Type here" aria-label="Search" type='Search' />
          <MDBBtn outline style={{ margin: '0px' }}>Search</MDBBtn>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
  );
}
