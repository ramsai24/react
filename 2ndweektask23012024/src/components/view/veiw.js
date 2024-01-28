import "./veiw.css";

export const View = (props) => {
  const { onViewDetails, id } = props;

  const onView = () => {
    onViewDetails(id);
  };
  return (
    <button className="view-btn" type="button" onClick={onView}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-view-list"
        viewBox="0 0 16 16"
      >
        <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14" />
      </svg>
      <span className="span-El">veiw</span>
    </button>
  );
};
