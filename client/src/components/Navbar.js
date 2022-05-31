import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg-dark my-3 rounded-3">
        <div className="row justify-content-center">
          <div className="col-11">
            <nav className="navbar navbar-expand-lg navbar-dark">
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
                    <a className='nav-link' href="#sec-about">About Us</a>
                    <a className='nav-link' href="#sec-contact">Contact Us</a>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        SignIn
                      </NavLink>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <NavLink className="dropdown-item" to="/signinadmin">
                            Admin
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/signinaccountmanager"
                          >
                            Account Manager
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/signinclient">
                            Client
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/signindesigner"
                          >
                            Designer
                          </NavLink>
                        </li>
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
