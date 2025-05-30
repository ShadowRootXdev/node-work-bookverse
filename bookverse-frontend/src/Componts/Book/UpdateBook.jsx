import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/updatebook.css';
import { toast } from 'react-toastify';
import { api } from '../../Utils/axios';

export default function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    price: '',
    instock: false,
  });

  // Fetch the existing book data on mount
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await api.get(`/book/${id}`);
        const book = res.data;
        setFormData({
          title: book.title || '',
          author: book.author || '',
          genre: book.genre || '',
          price: book.price || '',
          instock: !!book.instock,
        });
      } catch (err) {
        toast.error('Failed to load book.');
      }
    };

    fetchBook();
  }, [id]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, author, genre, price } = formData;
    if (!title || !author || !genre || price === '') {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      await api.put(`/book/update/${id}`, formData);
      toast('Book updated successfully!');
      navigate('/');
    } catch (err) {
      toast('Update failed.');
    }
  };

  return (
    <div className="update">

    <div className="update-container">
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="instock"
            checked={formData.instock}
            onChange={handleChange}
          />
          In Stock
        </label>
        <button type="submit" className="update-btn">Update</button>
      </form>
    </div>
    </div>
  );
}
