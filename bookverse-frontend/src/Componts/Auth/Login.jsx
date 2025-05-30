import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../Styles/login.css';
import { api } from '../../Utils/axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });


  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/login', credentials);
      const { user } = res.data;
      localStorage.setItem('user', JSON.stringify(res.data.user));
      

      if (user) {
        navigate('/')
        toast('Login successful!');
      }else{
        toast("No user found !!!")
      }

      // localStorage.setItem('authToken', token);
      // localStorage.setItem('user', JSON.stringify(user));

      console.log('Logged in user:', user);

     
    } catch (err) {
      console.error(err);
      toast('Login failed. ' + (err.response?.data?.message || 'Invalid credentials.'));
    }
  };

  return (
    <div className="login">

    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
        required
      />

      <button type="submit">Login</button>
      <p>No account ?  <span><a href="/register">Sign Up</a></span></p>
    </form>
    </div>
  );
}
