const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{blog.content}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {blog.author?.name}
          </span>
          <span className="ml-auto">
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;