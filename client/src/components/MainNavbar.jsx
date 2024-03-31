
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../assets/fog1.jpg';
import { FaCode } from "react-icons/fa";



const MainNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='d-flex gap-2 align-items-center' href="#/">
            <img className='rounded' src={logo1} alt="logo1" style={{width:'50px'}} />
            <span>MyLoginApp</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="https://github.com/ROR2022/loginApp">
              <span className=''><FaCode/></span>
            </Nav.Link>
            <Nav.Link href="#/languages">Languages</Nav.Link>
            <Nav.Link href="#/support">Support</Nav.Link>
            <Nav.Link href="#/contact">Contac Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar