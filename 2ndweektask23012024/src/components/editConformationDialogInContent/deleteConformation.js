import "./deleteConformation.css";

export const EditConformations = (props) => {
  const { deleteCnfInContentOff, onDelete, deleteId } = props;

  const eventTrigger = () => {
    // console.log("triggered");
    onDelete(deleteId);
  };
  return (
    <div className="delete-confirmation-container-tranparent-back">
      <div className="delete-confirmation-container">
        <h1 className="delete-head">Editing conformation</h1>
        <p className="delete-para">Are you sure you want to Edit this event?</p>
        <div>
          <button type="button" className="cnf-btn" onClick={eventTrigger}>
            Confirm Updating...
          </button>
          <button
            type="button"
            className="back-btn"
            onClick={deleteCnfInContentOff}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
