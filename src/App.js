import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import ManageAccount from './Components/ManageAccount';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles


const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="mb-4">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Register</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/ManageAccount/:username" element={<ManageAccount/>} />

          
            
        </Routes>
      </div>
    </Router>
  );
};

export default App;

