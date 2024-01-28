import "./added.css";

export const AddedSuccess = (props) => {
  const { onCloseSuccessDialog, isSuccessName } = props;
  // console.log(isSuccessName);
  return (
    <div className="success-container">
      <h1>Added Success {isSuccessName}</h1>
      <button
        type="submit"
        className="close-btn"
        onClick={onCloseSuccessDialog}
      >
        close
      </button>
    </div>
  );
};
