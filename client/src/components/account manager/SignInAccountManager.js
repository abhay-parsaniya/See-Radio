import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import "../SignIn.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const SignInAccountManager = () => {
  // 'state' is assigned a value but never used
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const PostData = (event) => {
    event.preventDefault();

    fetch("/signinaccountmanager", {
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
        console.log(data);
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
          navigate("/pendingrequests");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 col-md-10 col-sm-12 text-center">
            <div className="card p-2">
              <h2 className="py-3"> Login </h2>

              <form>
                <div className="row mb-4 align-items-center">
                  <label className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      className="form-control w-75 mx-auto"
                      id="user_email"
                      value={email}
                      onChange={(object) => {
                        setEmail(object.target.value);
                      }}
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-4 align-items-center">
                  <label className="col-sm-3 col-form-label">Password</label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control w-75 mx-auto"
                      id="user_password"
                      value={password}
                      onChange={(object) => {
                        setPassword(object.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={PostData}
                  className="btn btn-primary"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInAccountManager;
