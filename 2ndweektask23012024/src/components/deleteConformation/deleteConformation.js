import "./deleteConformation.css";

export const DeleteConformation = () => {
  return (
    <div className="delete-confirmation-container-tranparent-back">
      <div className="delete-confirmation-container">
        <h1 className="delete-head">Delete conformation</h1>
        <p className="delete-para">
          Are you sure you want to permently delete this event?
        </p>
        <div>
          <button type="button" className="cnf-btn">
            Confirm Delete
          </button>
          <button type="button" className="back-btn">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
