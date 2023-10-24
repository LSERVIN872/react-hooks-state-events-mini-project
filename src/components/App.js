import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const onTaskFormSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  const onDelete= (taskText) => {
    const updatedTasks = tasks.filter((task) => task.text !== taskText);
    setTasks(updatedTasks);
  };
 
  const handleCategoryClick = (category) => {
    if (category === "All") {
      setTasks(TASKS);
    } else {
      const filteredTasks = TASKS.filter(task => task.category === category);
      setTasks(filteredTasks);
    }
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategoryClick={handleCategoryClick} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} onDelete={onDelete} />
    </div>
  );
}

export default App