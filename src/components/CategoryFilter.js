import React, { useState } from "react";

function CategoryFilter({ categories, handleCategoryClick }) {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleClick = (category, index) => {
    setSelectedButtonIndex(index);
    handleCategoryClick(category);
  };

  return (
    <div>
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button
          key={category}
          onClick={() => handleClick(category, index)}
          className={selectedButtonIndex === index ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter