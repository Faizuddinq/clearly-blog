import { useState } from 'react';
import { blogs } from './data/blogs';
import Header from './components/Header';
import BlogCard from './components/BlogCard';
import Footer from './components/Footer';
import Pagination from './components/Pagination';

function App() {
  const itemsPerPage = 8; 
  const [currentPage, setCurrentPage] = useState(1);


  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const currentBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto pt-20 px-4 py-12">
        <h2 className="text-3xl text-gray-700 font-bold text-center mb-12">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
