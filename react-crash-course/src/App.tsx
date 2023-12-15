import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import CreateItem from "./components/CreateItem";
import "./App.css";
import { TodoItem } from "./interfaces/TodoItem";

function App() {
  const [todoItems, setItems] = useState<TodoItem[]>([]);
  const updateTodoItem = (id: string) => {
    const updatedItems = todoItems.map((item: TodoItem) => {
      if (item.id === id) {
        return {
          ...item,
          isComplete: !item.isComplete,
        };
      }
      return item;
    });

    setItems(updatedItems);
  };

  const handleDeleteItem = (id: string) => {
    console.log("deleting item " + id);

    const items = todoItems.filter((i) => i.id != id);
    setItems(items);
  };

  const handleCreateNewItem = (newItem: TodoItem) => {
    // Use a functional update to ensure the latest state is used
    setItems((prevItems) => {
      const updatedItems = [...prevItems, newItem];
      const updatedItemsJSON = JSON.stringify(updatedItems);
      localStorage.setItem("items", updatedItemsJSON);
      return updatedItems;
    });
  };

  useEffect(() => {
    const dataString = localStorage.getItem("items");
    dataString && setItems(JSON.parse(dataString));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <CreateItem onCreateItem={handleCreateNewItem} />
        <TodoList
          items={todoItems}
          onTaskCompleted={updateTodoItem}
          onDeleteItem={handleDeleteItem}
        />
      </div>
    </div>
  );
}

export default App;
