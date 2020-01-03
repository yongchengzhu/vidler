import React from 'react';

import useSignup from "../hooks/useSignup";

const SignupPage = () => {
    const [password, changePassword, dummy] = useSignup("");
    const [passwordConfirm, confirmChange, handleSubmit] = useSignup("");

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
                        <input id="email" name="email" type="email"/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="password" name="password" type="password" onChange={changePassword}/>
                        <label htmlFor="password">Password</label>
                        {/*<h1>{password}</h1>*/}               
                    </div>
                    <div className="input-field col s12">
                        <input id="password-confirm" name="password_confirm" type="password" onChange={confirmChange}/>
                        <label htmlFor="password">Confirm Password</label>
                        {/*<h1>{passwordConfirm}</h1>*/}                  
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