import React, {useState} from 'react';
import useSignup from "../hooks/useSignup";

const SignupPage = () => {
    const [handleChange, handleSubmit] = useSignup('');

    return (
        <div className="center">
          {/* Temporary Logo; Replace this later. */}
          <div className="auth-logo"></div>
          <div className="welcome-text">
            Hey, let's get you signed up!
          </div>
          <div className="welcome-sub">
            Enter details below to sign up.
          </div>
          <div className="container form-container">
            <div className="row">
              <form className="col s6 offset-s3 auth-form z-depth-2" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="name" name="name" type="text" onChange={handleChange} required/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="username" name="username" type="text" onChange={handleChange} required/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="email" name="email" type="email" onChange={handleChange} required/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="password" name="password" type="password" onChange={handleChange} required/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="passwordConfirm" name="passwordConfirm" type="password" onChange={handleChange} required/>
                        <label htmlFor="passwordConfirm">Confirm Password</label>
                    </div>
                    <div className="input-field col s12">
                    <input type="submit" className="btn submit-btn" value="Sign Up" />
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}

export default SignupPage;