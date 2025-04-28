import { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', adminKey: '' });
  const [isAdmin, setIsAdmin] = useState(false); // Toggle for Admin Key field
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      if (isAdmin && formData.adminKey.trim() !== '') {
        payload.adminKey = formData.adminKey.trim();
      }

      await axios.post('/auth/signup', payload);
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Signup Failed');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-80" onSubmit={handleSignup}>
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <input
          type="text"
          placeholder="Name"
          className="input mb-4 w-full p-2 border rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="input mb-4 w-full p-2 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="input mb-4 w-full p-2 border rounded"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="adminToggle"
            className="mr-2"
            checked={isAdmin}
            onChange={() => setIsAdmin(!isAdmin)} 
          />
          <label htmlFor="adminToggle" className="text-sm text-gray-600">
            Sign up as Admin
          </label>
        </div>

        {isAdmin && (
          <input
            type="text"
            placeholder="Admin Secret Key"
            className="input mb-6 w-full p-2 border rounded"
            value={formData.adminKey}
            onChange={(e) => setFormData({ ...formData, adminKey: e.target.value })}
          />
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
