import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [serverStatus, setServerStatus] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  // Fetch data when component mounts
  useEffect(() => {
    fetchServerStatus();
    fetchUsers();
  }, []);

  const fetchServerStatus = async () => {
    try {
      const response = await axios.get('/api/health');
      setServerStatus(response.data.status);
    } catch (error) {
      console.error('Error fetching server status:', error);
      setServerStatus('Failed to connect to server');
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: '', email: '' });
      alert('User added successfully!');
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Error adding user');
    }
  };

  const handleInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Full-Stack Application</h1>
        <p>React.js + Node.js + Express</p>
        
        <div className="status-card">
          <h3>📡 Server Status:</h3>
          <p className={serverStatus === 'Server is running' ? 'status-online' : 'status-offline'}>
            {serverStatus || 'Checking...'}
          </p>
        </div>

        <div className="users-section">
          <h3>👥 Users List:</h3>
          {loading ? (
            <p>Loading users...</p>
          ) : (
            <ul className="users-list">
              {users.map(user => (
                <li key={user.id}>
                  <strong>{user.name}</strong> - {user.email}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="add-user-section">
          <h3>➕ Add New User:</h3>
          <form onSubmit={handleAddUser}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newUser.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newUser.email}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Add User</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;