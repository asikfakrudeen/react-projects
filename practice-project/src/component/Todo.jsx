// Todo.jsx
import React, { useEffect, useState } from "react";
import TaskTable from "./TaskTable";

const Todo = () => {

    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null); // null => add mode

    const handleText = (event) => setText(event.target.value);

    const handleSubmit = () => {

        const trimmedText = text.trim();
        if (trimmedText === "") return;

        // Prevent duplicates (except when editing the same item)
        const isDuplicate =
        tasks.includes(trimmedText) &&
        tasks[editingIndex] !== trimmedText;

        if (isDuplicate) {
        console.log("Task already exists");
        return;
        }

        if (editingIndex === null) {
        // ADD
        setTasks([...tasks, trimmedText]);
        console.log(`${trimmedText} created`);
        } else {
        // UPDATE
        const updatedTasks = tasks.map((task, index) =>
            index === editingIndex ? trimmedText : task
        );
        setTasks(updatedTasks);
        console.log(`Task at index ${editingIndex} updated to "${trimmedText}"`);
        setEditingIndex(null);
        }
        setText("");
    };

    const handleDelete = (index) => {
        console.log("Delete index:", index);
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        console.log("Task deleted");

        // If we deleted the one being edited, reset edit mode
        if (editingIndex === index) {
        setEditingIndex(null);
        setText("");
        }
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setText(tasks[index]);
        console.log(`Editing task at index ${index}`);
    };

    useEffect(() => console.log("component mounted"), []);
    useEffect(() => console.log("tasks changed"), [tasks]);

    return (
        <div>
        <h2>Todo App</h2>

        <TaskTable
            tasks={tasks}
            text={text}
            editingIndex={editingIndex}
            onTextChange={handleText}
            onSubmit={handleSubmit}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />

        {/* Just to see the raw array */}
        <h3>Tasks: {tasks.join(", ")}</h3>
        </div>
    );
};

export default Todo;