import "./editConformationDialogInContent.css";

export const EditConformations = (props) => {
  const {
    editCnfInContentOff,
    submitUpdatedDetails,
    revieveEditObjectDetails,
  } = props;

  const eventTrigger = () => {
    console.log("triggered");
    submitUpdatedDetails(revieveEditObjectDetails);
  };

  const goBack = () => {
    editCnfInContentOff(revieveEditObjectDetails);
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
          <button type="button" className="back-btn" onClick={goBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
