import { Link } from "react-router-dom";

const RequiredLogin = () => {
  return (  
    <div className="require-login">
      <h2>Sorry</h2>
      <p>You need to login to view this page</p>
      <Link to="/login">Log In</Link>
    </div>
  );
}

export default RequiredLogin;