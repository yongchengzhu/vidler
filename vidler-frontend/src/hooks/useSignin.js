import { useState, useContext } from 'react';

import history from '../utils/history';
import AuthContext from '../contexts/AuthContext';
import auth from '../apis/auth';

export default () => {
  const { setIsAuth } = useContext(AuthContext);
  const [form, setForm] = useState({ usernameOrEmail: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await auth.post('/signin', form);
      setIsAuth(true);
      setError("");
      localStorage.setItem('token', response.data.accessToken);
      history.push('/');
    } catch(err) {
      // Show error message.
      setError(err.response.data.message);
    }
  }

  return [handleChange, handleSubmit, error];
}