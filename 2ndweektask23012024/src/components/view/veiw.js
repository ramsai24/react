import "./veiw.css";

export const View = (props) => {
  const { onViewDetails, id } = props;

  const onView = () => {
    onViewDetails(id);
  };
  return (
    <button type="button" onClick={onView}>
      View
    </button>
  );
};
