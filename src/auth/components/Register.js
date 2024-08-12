import React, { useState } from 'react'
import { registerService } from '../services/auth.service';
const initalState = {
    name: "", 
    password: "",
    email: "",
    
    password2: ""
}

const Register = () => {

 const [formData, setFromData] = useState(initalState)  
 const [error, setError] = useState({});
 const {name,password, email, password2} = formData; 
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        registerService(formData).then(res=>console.log(res)).catch((err)=>{
            let errDetails = {}
            err.response.data.errors.forEach(e=> {
                errDetails[e.param] = e.msg;
            })
            console.log(errDetails)
            setError({...errDetails})
        });
    }
    const onChange = (e) => {
        const {name, value} = e.target;
        setFromData({...formData, [name]: value});
    };
  return (
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name} required  onChange={onChange}/>
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" value={email} name="email" onChange={onChange} />
          <div>{error.email}</div>
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
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
          <div>{error.password}</div>
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </section>
  )
}

export default Register