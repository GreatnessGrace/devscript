import { useEffect, useState } from 'react';
import axios from '../api/axios';
import BlogCard from '../components/BlogCard';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await axios.get('/blogs');
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};


export default Home;
