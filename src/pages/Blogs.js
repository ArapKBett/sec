import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from API
    fetch('/api/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Cybersecurity Blogs</h1>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.id} className="border p-4 rounded-lg shadow-md">
            <Link to={`/blog/${blog.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
              {blog.title}
            </Link>
            <p className="text-gray-600">{blog.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
