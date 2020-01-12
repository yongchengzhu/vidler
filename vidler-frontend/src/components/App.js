import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from '../utils/history';
import { AuthProvider } from '../contexts/AuthContext';
import Navbar from './Navbar';
import HomePage from './HomePage';
import SigninPage from './SigninPage';
import SignupPage from './SignupPage';
import SignoutPage from './SignoutPage';
import VideoUploadPage from './VideoUploadPage';
import useUser from '../hooks/useUser';

import "../styles/App.css";

const App = () => {
  useUser();

  return (
    <Router history={history}>
      <Navbar />
      <div className="page-container">
        <Switch>
          <Route path="/signup" component={SignupPage}/>
          <Route path="/signin" component={SigninPage} />
          <Route path="/signout" component={SignoutPage} />
          <Route path="/user/upload" component={VideoUploadPage}/>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);