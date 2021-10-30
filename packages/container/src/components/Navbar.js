import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/deposits">Deposits</Link>
          </li>
          <li>
            <Link to="/expenses">Expenses</Link>
          </li>
          <li>
            <Link onClick={onLogout} to="/login">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
