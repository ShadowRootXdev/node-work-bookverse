import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../Utils/axios.js';
import { toast} from 'react-toastify';
import '../Styles/BookRegister.css';

const BookRegister = () => {
  const Navigator = useNavigate()
  const [form, setForm] = useState({
    title: '',
    author: '',
    genre: '',
    price: '',
    instock: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.author || !form.genre || !form.price) {
      toast.error('Please fill out all required fields.');
      return;
    }

    try {
      await api.post('/book/register', form);
      toast('Book registered successfully!');
      setForm({ title: '', author: '', genre: '', price: '', instock: false });
      Navigator('/')
    } catch (error) {
      console.error(error);
      toast('Failed to register book.');
    }
  };

  return (
    <div className="book">

    <div className="book-register-container">
      <form onSubmit={handleSubmit} className="book-form">
        <h2>Register New Book</h2>

        <label>Title</label>
        <input type="text" name="title" value={form.title} onChange={handleChange} />

        <label>Author</label>
        <input type="text" name="author" value={form.author} onChange={handleChange} />

        <label>Genre</label>
        <input type="text" name="genre" value={form.genre} onChange={handleChange} />

        <label>Price</label>
        <input type="number" name="price" value={form.price} onChange={handleChange} />

        <label>
          <input type="checkbox" name="instock" checked={form.instock} onChange={handleChange} />
          In Stock
        </label>

        <button type="submit">Register Book</button>
      </form>
    </div>
    </div>
  );
};

export default BookRegister;
