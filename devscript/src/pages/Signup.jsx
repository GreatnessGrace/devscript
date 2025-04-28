import { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/signup', formData);
      navigate('/login');
    } catch (error) {
      alert('Signup Failed');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="bg-white p-8 rounded shadow-md w-80" onSubmit={handleSignup}>
        <h2 className="text-2xl font-bold mb-6">Signup</h2>
        <input type="text" placeholder="Name" className="input mb-4" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <input type="email" placeholder="Email" className="input mb-4" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        <input type="password" placeholder="Password" className="input mb-4" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
