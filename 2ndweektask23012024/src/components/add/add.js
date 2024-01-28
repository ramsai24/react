import "./add.css";

export const Add = (props) => {
  const { onAdd } = props;
  return (
    <button type="button" onClick={onAdd}>
      Add
    </button>
  );
};
