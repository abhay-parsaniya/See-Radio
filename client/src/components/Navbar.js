import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { UserContext } from "../App";
import "../components/Navbar.css";

const Navbar = () => {

  // 'dispatch' is assigned a value but never used
  // const { state } = useContext(UserContext);

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-11">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  See Radio
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav w-50 justify-content-evenly">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                    <NavLink className="nav-link" to="/aboutus">
                      AboutUs
                    </NavLink>
                    <NavLink className="nav-link" to="/contactus">
                      ContactUs
                    </NavLink>
                    <li className="nav-item dropdown">
                      <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        SignIn
                      </NavLink>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><NavLink className="dropdown-item" to="/signinadmin">Admin</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/signinaccountmanager">Account Manager</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/signinclient">Client</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/signindesigner">Designer</NavLink></li>
                      </ul>
                    </li>
                    <NavLink className="nav-link" to="/signupclient">
                      SignUp
                    </NavLink>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
