import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = ({ auth, setAuth }) => {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">API</Navbar.Brand>
    <Nav className="me-auto">
      {auth ? 
      <>
      <Nav.Link as={Link} to="/" >Home</Nav.Link>
      <Nav.Link as={Link} to="/users" >Users</Nav.Link>
      <Nav.Link onClick={() => setAuth(!auth)}> {auth ? "logout" : "login"} </Nav.Link>
      </>
      : <>
      <Nav.Link as={Link} to="/" >Home</Nav.Link>
      <Nav.Link onClick={() => setAuth(!auth)}> {auth ? "logout" : "login"} </Nav.Link>
      </>
      }
      
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Navigation