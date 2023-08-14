import React, { useState } from "react";
import "./portfolio.css";
import port from "../../assets/profilephotoimg.avif";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default to "All"

  const categories = [
    { label: "All", images: [port, port, port, port, port, port, port, port, port] },
    { label: "Web", images: [port, port, port, port, port, ] },
    { label: "App", images: [port, port, port] },
    // Define other categories and their images here
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const selectedCategoryObj = categories.find(category => category.label === selectedCategory);
  const imagesToShow = selectedCategoryObj ? selectedCategoryObj.images : [];

  return (
    <>
      <h3 className="port">Our Portfolio</h3>
      <div className="buttn">
        {categories.map((category, index) => (
          <button
            key={index}
            className={selectedCategory === category.label ? "active act" : "act"}
            onClick={() => handleCategoryClick(category.label)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="portfol">
        {imagesToShow.map((image, index) => (
          <img
            key={index}
            className="img40"
            src={image}
            alt={`appdevelopment-${index}`}
            height={400}
            width={400}
          />
        ))}
      </div>
    </>
  );
}

export default Portfolio;
