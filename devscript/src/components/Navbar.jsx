import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <div className="font-bold text-xl">BlogApp</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        {token ? (
          <>
            <Link to="/admin">Dashboard</Link>
            <button onClick={handleLogout} className="ml-2 bg-red-500 px-3 py-1 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
