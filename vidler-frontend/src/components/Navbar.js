import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../contexts/AuthContext';

const Navbar = () => {
  const { isAuth, user } = useContext(AuthContext);

  return (
    <nav className="navbar-container">
      <div className="nav-wrapper lighten-5">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {
            !isAuth? (
              <>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
              </>
            ) : (
              <>
                <li><Link to="#">Hi, {user.username}</Link></li>
                <li><Link to="/signout">Sign Out</Link></li>
              </>
            )
          }
        </ul>
      </div>
    </nav>    
  );
}

export default Navbar;