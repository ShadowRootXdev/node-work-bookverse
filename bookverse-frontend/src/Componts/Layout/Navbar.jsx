import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../Styles/navbar.css';
import { useUser } from '../../Utils/UserContext.js';
import { logoutUser } from '../../Utils/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate()
  const { user, setUser } = useUser();

  const handleLogout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem('user');
      setUser(null);
      navigate("/login")
      toast.success('Logged out');
    } catch {
      toast.error('Logout failed');
    }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
    >
      <div className="navbar-logo">MyApp</div>

      <ul className="navbar-links">
        <li><Link to="/" className="nav-link">Books</Link></li>
        <li><Link to="/about" className="nav-link">About Us</Link></li>
        <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
      </ul>

      <motion.div className="navbar-auth" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        {user ? (
          <>
            <span className="navbar-username">Hello, {user.username}</span>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        ) : (
          <Link to="/login" className="signin-button">Sign In</Link>
        )}
      </motion.div>
    </motion.nav>
  );
}
