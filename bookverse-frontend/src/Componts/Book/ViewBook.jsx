import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styles/viewbook.css';

export default function ViewBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`/book/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.error('Failed to load book:', err));
  }, [id]);

  if (!book) return <div className="view-container">Loading...</div>;

  return (
    <div className="view-container">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Price:</strong> ${book.price}</p>
      <p><strong>In Stock:</strong> {book.instock ? 'Yes' : 'No'}</p>
    </div>
  );
}
