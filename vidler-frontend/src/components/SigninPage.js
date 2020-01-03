import React from 'react';

import useSignin from '../hooks/useSignin';

const SigninPage = () => {
  const [handleChange, handleSubmit, error] = useSignin();

  return (
    <div className="center">
      {/* Temporary Logo; Replace this later. */}
      <div className="auth-logo"></div>
      <div className="welcome-text">
        Hey, good to see you again!
      </div>
      <div className="welcome-sub">
        Login to get going.
      </div>
      <div className="container form-container">
        <div className="row">
          <form className="col s6 offset-s3 auth-form z-depth-2" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                { error.length? <div className="err-message">{ error }</div> : null}
              </div>
              <div className="input-field col s12">
                <input id="usernameOrEmail" name="usernameOrEmail" type="text" onChange={handleChange} />
                <label htmlFor="usernameOrEmail">Username / Email</label>
              </div>
              <div className="input-field col s12">
                <input id="password" name="password" type="password" onChange={handleChange} />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field col s12">
                <input type="submit" className="btn submit-btn" value="Sign In" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;