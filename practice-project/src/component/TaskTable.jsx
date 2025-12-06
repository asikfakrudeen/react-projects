// TaskTable.jsx
import React from "react";

const TaskTable = ({
  tasks,
  text,
  editingIndex,
  onTextChange,
  onSubmit,
  onEdit,
  onDelete,
}) => {
  return (
    <table border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr>
          <th>Task</th>
          <th>Actions</th>
        </tr>
        {/* Row for ADD / UPDATE */}
        <tr>
          <td>
            <input
              type="text"
              value={text}
              onChange={onTextChange}
              placeholder="Enter task"
            />
          </td>
          <td>
            <button onClick={onSubmit}>
              {editingIndex === null ? "ADD" : "UPDATE"}
            </button>
          </td>
        </tr>
      </thead>

      <tbody>
        {tasks.length === 0 ? (
          <tr>
            <td colSpan="2" style={{ textAlign: "center" }}>
              No tasks yet
            </td>
          </tr>
        ) : (
          tasks.map((task, index) => (
            <tr key={index}>
              <td>{task}</td>
              <td>
                <button onClick={() => onEdit(index)}>Edit</button>
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TaskTable;