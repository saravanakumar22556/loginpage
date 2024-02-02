import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();

  const handleRegister = () => {
    if (!name || !username || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    
    console.log('Registering:', name, username, password, confirmPassword);

    
    history('/ManageAccount/' + username);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-50">
        <h2 className="card-title text-center">Register</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
            <input type="password" id="confirmPassword" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleRegister}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
