import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import SigninPage from './SigninPage';
import SignupPage from './SignupPage';

import "../styles/App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignupPage}/>
        <Route path="/signin" component={SigninPage} />
        <Route path="/" render={() => <Redirect to="/signin"/>} />
      </Switch>
    </Router>
  );
}

export default App;
