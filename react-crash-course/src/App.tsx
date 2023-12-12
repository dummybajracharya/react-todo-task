import { useState } from "react";
import ListGroup from "./components/ListGroup";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [todoItems, setItems] = useState([
    {
      id: 1,
      name: "eat momo",
      description: "eat momo in plaza",
      iscomplete: true,
    },
    {
      id: 2,
      name: "eat momo2",
      description: "eat momo in plaza",
      iscomplete: false,
    },
    {
      id: 3,
      name: "eat momo3",
      description: "eat momo in plaza",
      iscomplete: false,
    },
  ]);

  const updateTodoItem = (id: number) => {
    const updatedItems = todoItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          iscomplete: !item.iscomplete,
        };
      }
      return item;
    });

    setItems(updatedItems);
  };

  const deleteTodoItem = (id: number) => {
    setItems(todoItems.filter((i) => i.id != id));
  };

  return (
    <div className="App">
      <div className="container">
        <TodoList
          items={todoItems}
          onTaskCompleted={updateTodoItem}
          onDeleteItem={deleteTodoItem}
        />
      </div>
    </div>
  );
}

export default App;
