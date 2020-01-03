import React, { useContext } from 'react';

import history from '../utils/history';
import AuthContext from '../contexts/AuthContext';

const SignoutPage = () => {
  const { setIsAuth } = useContext(AuthContext);
  
  setIsAuth(false);
  localStorage.removeItem('token');
  history.push('/');

  return (
    <div></div>
  );
}

export default SignoutPage;