import { useEffect, useState } from 'react';
import axios from '../api/axios';
import BlogCard from '../components/BlogCard';
import { toast, Toaster } from 'react-hot-toast';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get('/blogs');
        setBlogs(data);
  
      } catch (error) {

        if (error.response && error.response.data.message == 'No token') {
          toast.error('Please login to view blogs'); 
        } else {
          toast.error('Failed to fetch blogs');
        }
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
            <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
