import { useState } from "react";
import { Model } from "./Model";
import { Backdrop } from "./Backdrop";

export const Todo = ({ title }) => {
  const [showModel, setShowModal] = useState(false);

  function handleDelete() {
    setShowModal(true);
  }

  function hideModal() {
    setShowModal(false);
  }

  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <div className="actions">
          <button className="btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      {showModel && (
        <Model confirmHandler={hideModal} cancelHandler={hideModal} />
      )}
      {showModel && <Backdrop onDismiss={hideModal} />}
    </>
  );
};
