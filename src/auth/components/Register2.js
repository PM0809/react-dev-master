import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { registerAction } from "../redux/actions/auth.action";
import { useNavigate } from "react-router-dom";
const initalState = {
  name: "",
  password: "",
  email: "",
  password2: "",
};
const Register2 = ({ isAuthenticated, registerAction }) => {
  const [formData, setFormData] = useState(initalState);
  const [error, setError] = useState({});
  const { password, email, password2, name } = formData;
  const navigate = useNavigate();
  // password = formData.password
  // email = formData.email
  // password2 = formData.password
  // name = formData.name
  const onSubmit = (e) => {
    e.preventDefault();

    console.log("hello from register");
    console.log(formData);
    registerAction(formData, navigate);
    // registerService(formData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     let errDetails = {};
    //     err.response.data.errors.forEach((e) => {
    //       console.log(e.param + " " + e.msg);
    //       errDetails[e.param] = e.msg;
    //     });
    //     setError({ ...errDetails });
    //   });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
            <div>{error.email}</div>
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={onChange}
            />
            <div>{error.password}</div>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={password2}
              onChange={onChange}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </>
  );
};

Register2.propTypes = {
  isAuthenticated: PropTypes.bool,
  registerAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

const mapDispatchToProps = { registerAction };

export default connect(mapStateToProps, mapDispatchToProps)(Register2);
