import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch blog details from API
    fetch(`/api/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">{blog.title}</h1>
      <p className="text-lg">{blog.content}</p>
      <div className="mt-8">
        <a href={`/quiz/${blog.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Take Quiz
        </a>
      </div>
    </div>
  );
};

export default BlogDetail;
