import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [taskText, setTaskText] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleTextChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      text: taskText,
      category: selectedCategory,
    };

    onTaskFormSubmit(newTask);

    // Reset form fields
    setSelectedCategory("");
    setTaskText("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories
            .filter((category) => category !== "All")
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm