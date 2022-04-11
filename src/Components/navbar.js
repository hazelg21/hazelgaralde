import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
export default function AppNavbar() {

    return (
        <Navbar className="navDiv" expand="lg">
            <Container className="navContainer">
                <div className="nav-logo">
                    <Link to="page-home" smooth={true} duration={500}>
                        <img className="nav-img" alt="My Logo" variant="top" src={require('../images/logos/logo-gray-nobg.png')}></img>
                    </Link>
                </div>
                <Navbar.Toggle className="menu-icon" aria-controls="navbar-list" />
                <Navbar.Collapse id="navbar-list">
                    <Nav className="me-auto menu-list">
                        <Nav.Link>
                            <Link className="navLink navbar-link" to="page-about" smooth={true} duration={500}>
                                about me
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="navLink navbar-link" to="page-project" smooth={true} duration={500}>
                                projects
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="navLink navbar-link" to="page-tech" smooth={true} duration={500}>
                                tech stacks
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="navLink navbar-link" to="page-contact" smooth={true} duration={500}>
                                contact
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse >
            </Container >
        </Navbar >
    )

}