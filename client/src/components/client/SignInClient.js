import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../App";
import "../SignIn.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const SignInClient = () => {
  // 'state' is assigned a value but never used
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const PostData = (event) => {
    event.preventDefault();

    fetch("/signinclient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.error) {
          // alert(data.error);
          toast.error(data.error, {
            theme: 'colored',
            type: 'error'
          });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          // alert("signed in success !!");
          toast.success("signed in success !!", {
            theme: 'colored',
            type: 'success'
          });
          navigate("/requestprogress");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 d-flex align-items-center">
                    <img
                      src="https://i.pinimg.com/originals/b3/97/24/b3972451f91a658c10c2b34682bd7292.gif"
                      alt="login form"
                      className="img-fluid mx-3"
                      style={{ borderRadius: "1rem" }}
                    />
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={PostData}>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Login
                        </h5>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="user_email"
                            name="email"
                            value={email}
                            onChange={(object) => {
                              setEmail(object.target.value);
                            }}
                            className="form-control form-control-lg"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="user_password"
                            name="password"
                            value={password}
                            onChange={(object) => {
                              setPassword(object.target.value);
                            }}
                            className="form-control form-control-lg"
                          />
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <Link
                            to="/signupclient"
                            style={{ color: "#393f81", textDecoration: "none" }}
                          >
                            Register here
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInClient;
