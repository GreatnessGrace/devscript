const BlogCard = ({ blog }) => {
    return (
      <div className="border rounded-md p-4 shadow hover:shadow-lg transition">
        <h2 className="font-bold text-lg">{blog.title}</h2>
        <p className="text-gray-700 mt-2">{blog.content}</p>
        <p className="text-sm text-gray-400 mt-2">Author: {blog.author?.name}</p>
      </div>
    );
  };
  
  export default BlogCard;
  