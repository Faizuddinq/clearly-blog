function BlogCard({ blog }) {
  return (
    <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden">
      <div className=" p-6">

      
      <img 
        src={blog.image} 
        alt={blog.title} 
        loading="lazy"
        className="w-full h-48 rounded-lg object-cover"
      />
      </div>
      <div className="p-6">
        <h2 className="text-2xl text-gray-700 font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-600 mb-4">{blog.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400 font-medium">{blog.date}</span>
          <button className=" border border-blue-500 text-blue-400 px-4 py-2 rounded hover:text-white hover:bg-blue-500">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;