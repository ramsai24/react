import "./deleted.css";

export const DeletedDialog = (props) => {
  const { onCloseSuccessDialog, deletedItem } = props;
  // console.log(deletedItem);
  return (
    <div className="success-container">
      <h1>Deleted Successfully {deletedItem}</h1>
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
