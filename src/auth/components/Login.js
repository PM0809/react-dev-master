import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { loginAction } from "../redux/actions/auth.action"; 
import { useNavigate } from "react-router-dom";
const initialState = {
    email: "", 
    password: ""
}

const Login = ({isAuthenticated, loginAction}) => {
    const [formData, setFromData] = useState(initialState)  
 const {password, email} = formData; 
 const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Hello from Login");
        loginAction(formData, navigate);
    }
    const onChange = (e) => {
        const {name, value} = e.target;
        setFromData({...formData, [name]: value});
    };
  return (
    <section className="container">
      <div className="alert alert-danger">
        Invalid credentials
      </div>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <a href="register.html">Sign Up</a>
      </p>
    </section>
  )
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
  };
}

const mapDispatchToProps = {loginAction}

export default connect(mapStateToProps, mapDispatchToProps)(Login);