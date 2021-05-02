import { Navbar, Nav, Button } from 'react-bootstrap';

const NavBar = () => {
  return(
    <>
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home"><b>BUSICARD</b></Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#home"><Button variant="outline-dark">Log Out</Button></Nav.Link>
    </Nav>
  </Navbar>
</>
  )
}

export default NavBar;