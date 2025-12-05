import React, { useState } from 'react';

// Initialize the list with some mock data
const initialTodos = [
  { id: 1, text: 'Learn React Hooks', isEditing: false },
  { id: 2, text: 'Finish project documentation', isEditing: false },
  { id: 3, text: 'Buy groceries', isEditing: false },
];

function TodoList() {
  // State for the list of tasks
  const [todos, setTodos] = useState(initialTodos);
  // State for the new task input field
  const [newTodoText, setNewTodoText] = useState('');
  // State to hold the temporary edited text
  const [editText, setEditText] = useState('');

  // --- 1. ADD Operation ---
  const handleAddTodo = (e) => {
    e.preventDefault(); // Prevents page reload on form submission
    if (newTodoText.trim() === '') return; // Don't add empty todos

    const newTodo = {
      id: Date.now(), // Use current timestamp as a unique ID
      text: newTodoText.trim(),
      isEditing: false,
    };

    setTodos([...todos, newTodo]);
    setNewTodoText(''); // Clear the input field
  };

  // --- 2. DELETE Operation ---
  const handleDeleteTodo = (id) => {
    // Filter out the todo that matches the provided ID
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  // --- 3. UPDATE (Edit) Operations ---
  
  // 3a. Start Edit Mode
  const handleEditClick = (id, currentText) => {
    // Set isEditing to true for the selected todo
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, isEditing: true } : { ...todo, isEditing: false }
    );
    setTodos(updatedTodos);
    setEditText(currentText); // Initialize the edit input with the current text
  };

  // 3b. Save Edit Changes
  const handleSaveEdit = (id) => {
    if (editText.trim() === '') {
        handleDeleteTodo(id); // Option: Delete if saved empty
        return;
    }
    
    // Map over the todos and update the text and set isEditing back to false
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: editText.trim(), isEditing: false } : todo
    );
    setTodos(updatedTodos);
    setEditText('');
  };

  // 3c. Cancel Edit
  const handleCancelEdit = (id) => {
    // Simply set isEditing back to false for the specific todo
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isEditing: false } : todo
    );
    setTodos(updatedTodos);
    setEditText(''); // Clear the edit state
  };


  return (
    <div className="todo-container">
      <h1>My React To-Do List</h1>
      
      {/* ADD TODO FORM */}
      <form onSubmit={handleAddTodo} className="todo-form">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>

      {/* TODO LIST */}
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            {todo.isEditing ? (
              // EDIT MODE UI
              <div className="edit-mode">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                />
                <button onClick={() => handleSaveEdit(todo.id)} className="save-button">
                  Save
                </button>
                <button onClick={() => handleCancelEdit(todo.id)} className="cancel-button">
                  Cancel
                </button>
              </div>
            ) : (
              // DISPLAY MODE UI
              <div className="display-mode">
                <span className="todo-text">{todo.text}</span>
                <div className="action-buttons">
                  <button 
                    onClick={() => handleEditClick(todo.id, todo.text)} 
                    className="edit-button"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDeleteTodo(todo.id)} 
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && <p className="empty-message">You have no tasks! Start adding some.</p>}
    </div>
  );
}

export default TodoList;