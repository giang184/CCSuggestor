import { useAuth } from "../contexts/AuthContext";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const MyNavBar = () => {
  const {currentUser, logout} = useAuth()
  console.log('nav',currentUser)
  console.log('without paren',useAuth)
  console.log('with paren',useAuth())
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Navbar.Brand  className="brand-logo" href="/">CCSuggestor</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to='/wallet'>Wallet</Link>
          <Link to='/suggest'>Suggest</Link>
          <Link to='/create'>Add Card</Link>
        </Nav>
        {!currentUser &&
        <Nav>          
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>
        </Nav>
        }
        {currentUser &&
          <Nav>          
            <Link to='/login' onClick={logout}>Log Out</Link>
            <Link to='/profile'>{currentUser.email}</Link>
          </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
  );
}
export default MyNavBar;