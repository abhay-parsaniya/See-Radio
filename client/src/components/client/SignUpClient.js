import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpClient = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const PostData = (event) => {

    event.preventDefault();

    if(!/^[a-zA-Z ]{3,30}$/.test(name))
    {
      return alert("Please Enter Name between 3 to 20 character");
    }
    else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password))
    {
      return alert("Password must be 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
    }

    fetch("/signupclient",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.error)
      {
        alert(data.error);
      }
      else{
        alert(data.msg);
        navigate("/signinclient");
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  return(
      <>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12 text-center">
              <div className="card p-2">
                <h2 className="py-3"> Sign Up </h2>

                <form onSubmit={PostData}>
                  <div className="row mb-4 align-items-center">
                    <label className="col-sm-3 col-form-label">
                      Name
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control w-75 mx-auto"
                        id="user_name"
                        value={name}
                        onChange = { (object) => { setName(object.target.value) } }
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-4 align-items-center">
                    <label className="col-sm-3 col-form-label">
                      Email
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="email"
                        className="form-control w-75 mx-auto"
                        id="user_email"
                        value={email}
                        onChange = { (object) => { setEmail(object.target.value) } }
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-4 align-items-center">
                    <label className="col-sm-3 col-form-label">
                      Password
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="password"
                        className="form-control w-75 mx-auto"
                        id="user_password"
                        value={password}
                        onChange = { (object) => { setPassword(object.target.value) } }
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Sign up
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default SignUpClient;