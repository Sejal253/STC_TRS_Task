import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../Logo.png';

const Styles = styled.div`
  .navbar { background-color: #254156;}
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
    &:hover { color: #9FFFCB; }
  }
  .navbar-brand {
    font-size: 1.4em;
    letter-spacing: 0.05em;
    color: white;
    &:hover { color: #9FFFCB; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <img src={logo} height={45} width={45}/>
      <Navbar.Brand href="/">XPLOREET</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search or type a command" className="" />
      </Form>
      </Navbar>
  </Styles>
)