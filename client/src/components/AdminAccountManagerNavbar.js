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
                <NavLink
                  className="navbar-brand"
                  to={state ? "/" : `/${props.go}`}
                >
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
                    <NavLink className="nav-link" to="/pendingrequests">
                      Pending Requests
                    </NavLink>
                    <NavLink className="nav-link" to="/designer">
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
