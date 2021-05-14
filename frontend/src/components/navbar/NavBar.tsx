import { Navbar, Nav } from "react-bootstrap";
import AuthButton from '../buttons/navbarButtons/AuthButton';

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
          <b>BUSICARD</b>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">
            <AuthButton>Log Out</AuthButton>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
