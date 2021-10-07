import {Link} from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {Navbar, Nav, Container} from 'react-bootstrap'

const MyNavBar = () => {
  const {currentUser, logout} = useAuth()
  console.log('nav',currentUser)
  const links = currentUser? <SignedInLinks /> : <SignedOutLinks />
  return ( 
    // <nav className="navbar ">
    //   <h3 className="brand-logo">CCSuggestor</h3>
    //     <Link to='/'>Wallet</Link>
    //     <Link to='/suggest'>Suggest</Link>
    //     <Link to='/create'>Add New Card</Link>
    //     {links}
    // </nav>

    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Navbar.Brand className="brand-logo">CCSuggestor</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href='/'>Wallet</Nav.Link>
          <Nav.Link href='/suggest'>Suggest</Nav.Link>
          <Nav.Link href='/create'>Add Card</Nav.Link>
        </Nav>
        {!currentUser &&
        <Nav>          
          <Nav.Link href='/login'>Log In</Nav.Link>
          <Nav.Link href='/signup'>Sign Up</Nav.Link>
        </Nav>
        }
        {currentUser &&
          <Nav>          
            <Nav.Link href='/login' onClick={logout}>Log Out</Nav.Link>
            <Nav.Link href='/profile'>{currentUser.email}</Nav.Link>
          </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
    
  );
}
export default MyNavBar;