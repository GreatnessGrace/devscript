import { useEffect, useState } from 'react';
import axios from '../api/axios';

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data } = await axios.get('/blogs');
    setBlogs(data);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    await axios.post('/blogs', formData);
    setFormData({ title: '', content: '' });
    fetchBlogs();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/blogs/${id}`);
    fetchBlogs();
  };

  return (
    <div className="p-6">
      <form className="mb-6" onSubmit={handleCreate}>
        <input type="text" placeholder="Title" className="input mb-2" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
        <textarea placeholder="Content" className="input mb-2" value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} required />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Create Blog</button>
      </form>
      <div className="grid gap-4">
        {blogs.map(blog => (
          <div key={blog._id} className="border p-4 rounded-md flex justify-between items-center">
            <div>
              <h3 className="font-bold">{blog.title}</h3>
              <p>{blog.content}</p>
            </div>
            <button onClick={() => handleDelete(blog._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
