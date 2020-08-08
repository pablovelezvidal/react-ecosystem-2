import React, { useState } from "react";

const NewTodoForm = () => {
  return (
    <div className="new-todo-form">
      <input type="text" className="new-todo-input" />
      <button className="new-todo-button">Create Todo</button>
    </div>
  );
};

export default NewTodoForm;
