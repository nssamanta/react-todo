import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const todolist = [
  {
    id: 1,
    title: "Begin assignment",
  },
  {
    id: 2,
    title: "Complete assignment",
  },
  {
    id: 3,
    title: "Submit assignment",
  },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todolist.map((item) => (
          <li key={item.id}>
            <span>{item.id}</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
