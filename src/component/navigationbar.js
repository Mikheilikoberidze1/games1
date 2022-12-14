import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/icon.png'
import ThemeBotton from "../ThemeButton";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const Navigationbar = () => {
  const { darkMode } = useContext(ThemeContext);
    return (
      <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} className='makenavboy' expand="lg">
      <Container>
      <Navbar.Brand href="/"><img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Mini Games</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/hangman">Hangman</Nav.Link>
            <Nav.Link href="/redorblack">Red or Black</Nav.Link>
            <Nav.Link href="/luckywheel">Wheel of Luck</Nav.Link>
            <Nav.Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <ThemeBotton />
      </Container>
      
    </Navbar>
    );
}
 

export default Navigationbar;
