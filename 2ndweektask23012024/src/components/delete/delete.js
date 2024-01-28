import "./delete.css";

export const Delete = (props) => {
  const { onDelete, id } = props;

  const onDeleteId = () => {
    onDelete(id);
  };
  return (
    <button type="button" onClick={onDeleteId}>
      Delete
    </button>
  );
};
