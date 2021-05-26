/* eslint-disable jsx-a11y/alt-text */
import React , { useContext } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Logo from "../images/logo JSI-2.png";
import "../styles/NavBar.css";
import { FormattedMessage } from 'react-intl'
import { langContext } from '../context/langContext'

const NavBar = () => {
  
  const idioma =  useContext(langContext);
  
  return (
    <div className="container-principal">
      <div className="nav-bar">
        <Navbar
          id="navv"
          collapseOnSelect
          fixed="top"
          expand="sm"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand className="navbar-brand" href="#">
              <img id="logo" src={Logo}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#about-me">
                  <FormattedMessage 
                  id="app.nav-about"
                  defaultMessage="Sobre Mí">
                  </FormattedMessage>
                  </Nav.Link>

                <div>
                  <FormattedMessage id="app.nav-tech" defaultMessage="Tecnologías">
                    {techtitle => 
                      <NavDropdown 
                      title={techtitle} 
                      id="collasible-nav-dropdown">
                    <NavDropdown.Item style={{ color: "#000" }} href="#frontend">
                    Frontend
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ color: "#000" }} href="#backend">
                    Backend
                  </NavDropdown.Item>
                    </NavDropdown>}
                  </FormattedMessage>
                </div>

                <Nav.Link href="#projects"><FormattedMessage id="app.nav-projects" defaultMessage="Proyectos"/></Nav.Link>
                <Nav.Link href="#contact"><FormattedMessage id="app.nav-contact" defaultMessage="Contacto"/></Nav.Link>
              </Nav>

              <button onClick={()=> idioma.languageFunction('es-AR')} id="btn-es" className="btn-lang">
                <img src="https://img.icons8.com/color/48/000000/spain-2.png" />
                
              </button>
              <button onClick={()=> idioma.languageFunction('en-US')} id="btn-en" className="btn-lang">
                <img src="https://img.icons8.com/color/48/000000/usa.png" />
              </button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
