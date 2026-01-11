import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={styles.container}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
        style={styles.input}
      />

      <button onClick={addTask} style={styles.button}>
        Add
      </button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index} style={styles.listItem}>
            {t}
            <button
              onClick={() => deleteTask(index)}
            >
              COMPLETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    width: "95%",
    margin: "2%",
    textAlign: "center",
  },
  input: {
    padding: "10px",
    width: "90%",
  },
  button: {
    padding: "8px 12px",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
};

export default App;
