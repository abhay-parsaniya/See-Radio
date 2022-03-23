import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const SignUpClient = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const PostData = (event) => {
    event.preventDefault();

    if (!/^[a-zA-Z ]{3,30}$/.test(name)) {
      return alert("Please Enter Name between 3 to 20 character");
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
        password
      )
    ) {
      return alert(
        "Password must be 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
      );
    }

    fetch("/signupclient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          // alert(data.error);
          toast.error(data.error, {
            theme: 'colored',
            type: 'error'
          });
        } else {
          // alert(data.msg);
          toast.success(data.msg, {
            theme: 'colored',
            type: 'success'
          });
          navigate("/signinclient");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage: "linear-gradient(#c4e0e5, #4ca1af)",
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-12 col-lg-10 col-xl-8">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Sign Up</h2>
                    <form onSubmit={PostData}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="user_name"
                          name="firstname"
                          value={name}
                          onChange={(object) => {
                            setName(object.target.value);
                          }}
                          className="form-control form-control-lg"
                          required
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="user_email"
                          name="email"
                          value={email}
                          onChange={(object) => {
                            setEmail(object.target.value);
                          }}
                          className="form-control form-control-lg"
                          required
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Email
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="user_password"
                          name="password"
                          value={password}
                          onChange={(object) => {
                            setPassword(object.target.value);
                          }}
                          className="form-control form-control-lg"
                          required
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-light"
                        >
                          Register
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <Link to="/signinclient" className="fw-bold text-body">
                          <u>Login here</u>
                        </Link>
                      </p>
                    </form>
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

export default SignUpClient;
