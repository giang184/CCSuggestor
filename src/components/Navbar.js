import {Link} from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>Credit Card Suggestor</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/suggest">Suggest</Link>
        <Link to="/create">Add New Card</Link>
        </div>
    </nav>
  );
}
export default Navbar;