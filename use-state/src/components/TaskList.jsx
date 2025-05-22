import { useState } from 'react';

const TaskList = () => {
  // Estado inicial: un arreglo vacío
  const [tasks, setTasks] = useState([
    { id: 1, text: "Aprender React", completed: false },
    { id: 2, text: "Hacer ejercicio", completed: false },
    { id: 3, text: "Leer un libro", completed: false },
  ]);

  // Estado para manejar el valor del input
  const [newTask, setNewTask] = useState("");

  // Función para agregar una tarea
  const addTask = () => {
    const newTaskObject = {
      id: tasks.length + 1,
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObject]);
    setNewTask(""); // Limpiar el input
  };

  // Función para eliminar una tarea
  const removeTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  // Función para marcar una tarea como completada
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Lista de Tareas</h2>
      
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nueva tarea"
        style={{ marginRight: '5px' }}
      />
      <button onClick={addTask}>Agregar</button>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              marginBottom: '5px'
            }}
          >
            <span onClick={() => toggleTask(task.id)} style={{ cursor: 'pointer' }}>
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)} style={{ marginLeft: '10px' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;