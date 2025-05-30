import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Componts/Layout/Navbar';
import Register from './Componts/Auth/Register';
import Login from './Componts/Auth/Login';
import Dashboard from "./Componts/Pages/Dashboard"
import About from './Componts/Pages/About';
import Contact from './Componts/Pages//Contact';
import ViewBook from './Componts/Book/ViewBook'
import UpdateBook from './Componts/Book/UpdateBook'
import BookRegister from "./Componts/Book/BookRegister"

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <div className="pt-24 px-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/book/update/:id" element={<UpdateBook />} />
          <Route path="/book/:id" element={<ViewBook />} />
          <Route path='/book-register' element={<BookRegister />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
