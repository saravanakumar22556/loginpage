import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    
    console.log('Logging in:', username, password);

    
    history('/ManageAccount/' + username);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-50">
        <h2 className="card-title text-center">Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
        </form>
        <p className="mt-2 text-center">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
