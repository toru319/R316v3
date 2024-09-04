import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../public/522764149110079954.jpg';

const Navbar: React.FC = () => {
  return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <img src={logo} alt="R316 Logo" className="logo-img" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbarNav" />
        <BootstrapNavbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">ホーム</Nav.Link>
            <Nav.Link as={Link} to="/notifications" >お知らせ</Nav.Link>
            <Nav.Link as={Link} to="/content">コンテンツ</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;