import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from '../images/icon.png'

const Navigationbar = () => {
    return (
        <Navbar bg="dark" variant="dark" className='makenavboy'>
        <Container>
          <Navbar.Brand href="/"><img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Mini Games</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/highorlow" className="nav-link">High or low</Link>
          <Link to="/redorblack" className="nav-link">Red or Black</Link>
          <Link to="/luckywheel" className="nav-link">Lucky Wheel</Link>
          </Nav>
        </Container>
      </Navbar>
    );
}
 
export default Navigationbar;
<Link to="/" className="nav-link">Home</Link>