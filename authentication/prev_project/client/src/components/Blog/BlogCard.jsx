import React from "react";

const BlogCard = ({ image_path, title, description, about, content }) => {
  return (
    <div calss="h-100 w-100 bg-gray-500 rounded-lg shadow-md overflow-hidden">
      <div className="h-50 w-full" >
        <img src={image_path} alt={title} />
      </div>
      <div className="p-4">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
};

export default BlogCard;
