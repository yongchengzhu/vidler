import { useState } from 'react';

export default () => {
  const [form, setForm] = useState({ email: "", password: "" });
  
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  return [handleChange, handleSubmit];
}