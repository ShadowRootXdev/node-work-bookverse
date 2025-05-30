import React, { useState } from 'react';
import '../Styles/register.css';
import { toast } from 'react-toastify';
import { api } from '../../Utils/axios'
import {  useNavigate } from 'react-router-dom';


export default function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullnames: ''
  });


  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/register', formData);
      toast('Registration successful!');
      console.log(res.data);
      navigate('/login')
    } catch (err) {
  if (err.response?.status === 409) {
    toast('Username already exists!');
  } else {
    toast('Registration failed.');
  }
}}

  return (
    <div className="register">

    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        name="fullnames"
        placeholder="Full Name"
        value={formData.fullnames}
        onChange={handleChange}
        required
        />
      <button type="submit">Register</button>
      <p>Already have account !!! <span><a href="/login">Login</a></span></p>
    </form>
        </div>
  );
}
