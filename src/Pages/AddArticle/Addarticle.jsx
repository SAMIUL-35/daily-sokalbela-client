import axios from 'axios';
import { useState } from 'react';

const Addarticle = () => {
  const [article, setArticle] = useState({
    title: "",
    image: "",
    publisher: "",
    tags: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({
      ...article,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, image, publisher, tags, description } = article;
    console.log(title, image, publisher, tags, description);

    try {
      const response = await axios.post('http://localhost:5000/article', {
        title,
        image,
        publisher,
        tags,
        description
      });
      console.log('Article submitted successfully:', response.data);
      // Optionally, reset the form after successful submission
      setArticle({
        title: "",
        image: "",
        publisher: "",
        tags: "",
        description: "",
      });
    } catch (error) {
      console.error('Error submitting article:', error);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add an Article</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            value={article.title} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input 
            type="text" 
            name="image" 
            placeholder="Image URL" 
            value={article.image} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Publisher</label>
          <input 
            type="text" 
            name="publisher" 
            placeholder="Publisher" 
            value={article.publisher} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Tags</label>
          <input 
            type="text" 
            name="tags" 
            placeholder="Tags" 
            value={article.tags} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea 
            name="description" 
            placeholder="Description" 
            value={article.description} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addarticle;
