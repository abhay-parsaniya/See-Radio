import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import "./Navbar.css";

const AdminAccountManagerNavbar = (props) => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-11">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to={state ? "/" : `/${props.go}`}>
                {props.title}
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
                  <div className="navbar-nav w-75 justify-content-evenly text-center">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                    <li className="nav-item dropdown">
                      <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Requests
                      </NavLink>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><NavLink className="dropdown-item" to="/pendingrequests">Pending</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/approvedrequests">Approved</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/rejectedrequests">Rejected</NavLink></li>
                      </ul>
                    </li>
                    <NavLink className="nav-link" to="/aboutus">
                      Graphic Designer
                    </NavLink>
                    <NavLink className="nav-link" to="/contactus">
                      Distribution Partner
                    </NavLink>
                    <NavLink className="nav-link" to="/signup">
                      History
                    </NavLink>
                    <button
                      type="submit"
                      onClick={() => {
                        localStorage.clear();
                        dispatch({ type: "CLEAR" });
                        navigate("/");
                        alert("Log Out Successfully !!");
                      }}
                      className="btn btn-primary"
                    >
                      Log Out
                    </button>
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

export default AdminAccountManagerNavbar;
