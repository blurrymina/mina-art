import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { signInAdmin } from '../configs/firebase'; // Importing the sign-in function

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // React Router's navigate function

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Attempt to sign in the admin user
      await signInAdmin(email, password);
      navigate('/mina-art/admin');  // Redirect to the admin panel
    } catch (err) {
      setError('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Admin Login</h2>
      {error && <p>{error}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLogin;
