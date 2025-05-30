import React, { useEffect, useState } from 'react';
import '../Styles/Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { api } from '../../Utils/axios.js';

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [confirmId, setConfirmId] = useState(null);

  const fetchBooks = async () => {
    try {
      const res = await api.get('/book/all');
      setBooks(res.data);
    } catch (err) {
      console.error('Failed to fetch books:', err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const confirmDelete = async () => {
    try {
      await api.delete(`/book/delete/${confirmId}`);
      setBooks(books.filter(book => book.id !== confirmId));
      setConfirmId(null);
    } catch (err) {
      console.error('Failed to delete book:', err);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/book/update/${id}`);
  };

  const handleView = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="dash">

    <div className="dashboard-container">
      <h2>Book Dashboard</h2>

      {books.length === 0 ? (
        <div className="no-books">No books found.</div>
      ) : (
        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th><th>Author</th><th>Genre</th>
              <th>Price</th><th>In Stock</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id} onClick={() => handleView(book.id)}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>${Number(book.price).toFixed(2)}</td>
                <td>{book.instock ? 'Yes' : 'No'}</td>
                <td>
                  <button
                    className="update-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUpdate(book.id);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="delete-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setConfirmId(book.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button type="button" className="btn-me" >
        <a href="/book-register">Create Your Own Book !!</a>
      </button>

      {confirmId !== null && (
        <div className="modal-backdrop">
          <div className="modal">
            <p>Are you sure you want to delete this book?</p>
            <div className="modal-buttons">
              <button onClick={() => setConfirmId(null)}>Cancel</button>
              <button onClick={confirmDelete} className="confirm-delete">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
          </div>
  );
}
