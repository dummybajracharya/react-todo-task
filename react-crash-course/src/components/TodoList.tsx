import React from "react";
interface TodoItem {
  id: number;
  name: string;
  description: string;
  iscomplete: boolean;
}

interface Props {
  items: TodoItem[];
  onTaskCompleted: (id: number) => void;
  onDeleteItem: (id: number) => void;
}

const TodoList = ({ items, onTaskCompleted, onDeleteItem }: Props) => {
  return (
    <table className="table caption-top">
      <caption className="display-6 my-4">Todo List !! </caption>
      <thead className="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Task</th>
          <th scope="col">description</th>
          <th scope="col">Completed</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <th
                scope="row"
                className={item.iscomplete ? "completed" : "not-completed"}
              >
                {item.name}
              </th>
              <th
                scope="row"
                className={item.iscomplete ? "completed" : "not-completed"}
              >
                {item.description}
              </th>
              <th scope="row">
                <input
                  type="checkbox"
                  className="task-checkbox"
                  checked={item.iscomplete}
                  onChange={() => onTaskCompleted(item.id)}
                />
              </th>
              <th scope="row">
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteItem(item.id)}
                >
                  {" "}
                  Delete{" "}
                </button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoList;
