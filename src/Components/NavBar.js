import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
    <Navbar bg="light" expand="lg" sticky="top" style={{ opacity: "0.7" }}>
      <Container className="container-fluid position-relative g-lg-4">
        <Navbar.Brand href="#Main" className="col-auto col-lg-2">Lawrence Ju</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="col col-lg-8 navbar-accordion">
          <Nav className="navbar-navigation-items">
            <Nav.Link href="#Main">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text className="col-auto col-lg-2 navbar-socials">
            <a href="https://www.linkedin.com/in/lawrence-ju-5715111b6/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in nav-icons"></i>
            </a>
            <a href="https://github.com/LawrenceJ1" target="_blank" rel="noreferrer">
                <i className="fab fa-github nav-icons"></i>
            </a>
            <a href="mailto:lawrencejuottawa@gmail.com" target="_blank" rel="noreferrer">
                <i className="fa-solid fa-envelope nav-icons"></i>
            </a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default NavBar;