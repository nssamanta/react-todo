export const todolist = [
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

function TodoList() {
  return (
    <ul>
      {todolist.map((item) => (
        <li key={item.id}>
          <span>{item.id}</span>
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
