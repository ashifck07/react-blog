import React from 'react'
import {Container,Navbar,Nav,Form,Button} from "react-bootstrap"

const HeaderNavbar = () => {
  return (
    <Container>
        <Navbar expand="lg" className="">
      <Container fluid>
        <h1 className=''>RUNO</h1>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='flex-grow-0'>
          <Nav
            className="me-auto my-2 my-lg-0 text-white"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#" className='text-white'>About</Nav.Link>
            <Nav.Link href="#" className='text-white'>Articles</Nav.Link>
            <Nav.Link href="#" className='text-white'>Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </Container>
  )
}

export default HeaderNavbar