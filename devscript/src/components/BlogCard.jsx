import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog._id}`}>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{blog.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{blog.content.slice(0, 100)}...</p>
        <span className="text-sm text-gray-500">
          {new Date(blog.createdAt).toLocaleDateString()}
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
