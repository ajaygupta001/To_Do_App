import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const registered = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/register", {
        name,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={registered}>
          <h2>Registration Form</h2>
          <div className="mb-2">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="Enter password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Register
          </button>
        </form>
        <p>Already have a Account!</p>

        <Link to="/login" className="btn btn-success">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
