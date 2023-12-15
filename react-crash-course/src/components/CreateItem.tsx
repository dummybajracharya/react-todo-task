import React, { useRef, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { TodoItem } from "../interfaces/TodoItem";
import { Modal } from "bootstrap";

interface Props {
  onCreateItem: (item: TodoItem) => void;
}

const CreateItem = ({ onCreateItem }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false); // Optionally, handle modal closing without saving
  };

  // Save the new item
  const saveNewItem = (e: React.FormEvent) => {
    console.log("savenew item");
    e.preventDefault();

    const item = {
      id: uuid(),
      name: taskName,
      description: taskDescription,
      isComplete: false,
    };

    // After everything is fine, call the callBack function to update the list
    onCreateItem(item);

    // Reset input fields
    reset();
  };

  const reset = (): void => {
    setTaskName("");
    setTaskDescription("");
    setShowModal(false); // Close the modal after saving
  };

  return (
    <div className="container my-4">
      <button
        type="button"
        className="btn btn-success"
        onClick={() => setShowModal(true)}
      >
        Create Task
      </button>
      <div
        ref={modalRef}
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        id="taskModal"
        tabIndex={-1}
        aria-labelledby="taskModalLabel"
        aria-hidden={!showModal}
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
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleModalClose}
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
