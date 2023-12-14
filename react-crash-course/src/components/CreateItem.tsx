import React, { useRef, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { TodoItem } from "../interfaces/TodoItem";
import { Modal } from "bootstrap";

interface Props {
  onCreateItem: (item: TodoItem) => void;
}

const CreateItem = ({ onCreateItem }: Props) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const saveNewItem = (e: React.FormEvent) => {
    e.preventDefault();

    const item = {
      id: uuid(),
      name: taskName,
      description: taskDescription,
      isComplete: false,
    };

    onCreateItem(item);
  };

  return (
    <div
      className="modal fade"
      id="taskModal"
      tabIndex={-1}
      aria-labelledby="taskModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="taskModalLabel">
              New Task
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={saveNewItem}>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Task Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">
                  Description:
                </label>
                <textarea
                  style={{ height: 200 }}
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              // data-bs-dismiss="modal"
              onClick={saveNewItem}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
