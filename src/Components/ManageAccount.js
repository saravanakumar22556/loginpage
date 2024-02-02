import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ManageAccounts = () => {
  const { username: initialUsername } = useParams();

  // State variables for user details
  const [username, setUsername] = useState(initialUsername);
  const [age, setAge] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [securityNumber, setSecurityNumber] = useState('');
  const [sex, setSex] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // Function to handle the update
  const handleUpdate = () => {
    
    console.log('Updating user details:', username, age, accountNumber, securityNumber, sex, mobileNumber);
    const updatedUsername = username + '_updated';
    setUsername(updatedUsername);
  };

  // Numeric input validation function
  const handleNumericInput = (value, setState) => {
    const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    setState(numericValue);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Manage Accounts</h2>
      <p>Welcome, {username}!</p>

      {/* Update Form */}
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age:</label>
          <input type="text" id="age" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="accountNumber" className="form-label">Account Number:</label>
          <input type="text" id="accountNumber" className="form-control" value={accountNumber} onChange={(e) => handleNumericInput(e.target.value, setAccountNumber)} />
        </div>
        <div className="mb-3">
          <label htmlFor="securityNumber" className="form-label">Security Number:</label>
          <input type="text" id="securityNumber" className="form-control" value={securityNumber} onChange={(e) => handleNumericInput(e.target.value, setSecurityNumber)} />
        </div>
        <div className="mb-3">
          <label htmlFor="sex" className="form-label">Sex:</label>
          <input type="text" id="sex" className="form-control" value={sex} onChange={(e) => setSex(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">Mobile Number:</label>
          <input type="text" id="mobileNumber" className="form-control" value={mobileNumber} onChange={(e) => handleNumericInput(e.target.value, setMobileNumber)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
};

export default ManageAccounts;
