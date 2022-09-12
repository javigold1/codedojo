import React, { useState } from 'react';
import './style.css';

const HookForm = props => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <form>
      <div className="form-group">
        <label htmlFor="lastName">First Name</label>
        <input onChange={onChangeHandler} type="text" name="firstName" />
        { (state.firstName.length !== 0 && state.firstName.length < 2) && <p>First Name must be at least 2 characters.</p> }
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input onChange={onChangeHandler} type="text" name="lastName" />
        { (state.lastName.length !== 0 && state.lastName.length < 2) && <p>Last Name must be at least 2 characters.</p> }
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Email</label>
        <input onChange={onChangeHandler} type="text" name="email" />
        { (state.email.length !== 0 && state.email.length < 5) && <p>Email must be at least 5 characters.</p> }
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Password</label>
        <input onChange={onChangeHandler} type="password" name="password" />
        { (state.password.length !== 0 && state.password.length < 8) && <p>Password must be at least 8 characters.</p> }
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Confirm Password</label>
        <input onChange={onChangeHandler} type="password" name="confirmPassword" />
        { (state.confirmPassword !== state.password) && <p>Passwords must match.</p> }
      </div>
    </form>
  )
};

export default HookForm;