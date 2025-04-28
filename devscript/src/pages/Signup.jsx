import { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', adminKey: '' });
  const [isAdmin, setIsAdmin] = useState(false);
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 text-center">Create Account</h1>
            <p className="text-gray-500 text-center mt-2">Join our community</p>
          </div>
          <form className="space-y-4" onSubmit={handleSignup}>
        {/* <input
          type="text"
          placeholder="Name"
          className="input mb-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        /> */}
 <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
        <input
          type="email"
          placeholder="Email"
          className="input mb-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="input mb-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />

<div className="flex items-center">
              <input
                type="checkbox"
                id="adminToggle"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={isAdmin}
                onChange={() => setIsAdmin(!isAdmin)}
              />
              <label htmlFor="adminToggle" className="ml-2 text-sm text-gray-600">
                Register as Admin
              </label>
            </div>

        {isAdmin && (
          <input
            type="text"
            placeholder="Admin Secret Key"
            className="input mb-6 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.adminKey}
            onChange={(e) => setFormData({ ...formData, adminKey: e.target.value })}
          />
        )}

<button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-colors"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
