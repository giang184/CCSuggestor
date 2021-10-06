import {Link} from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext"
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  const {currentUser} = useAuth()
  console.log('nav',currentUser)
  const links = currentUser? <SignedInLinks /> : <SignedOutLinks />
  return ( 
    <nav className="navbar">
      <h3 className="brand-logo">CreditCardSuggestor</h3>
      <Link to='/'>Wallet</Link>
      <Link to='/suggest'>Suggest</Link>
      <Link to='/create'>Add New Card</Link>
      {links}
    </nav>
  );
}
export default Navbar;