import "./addCompany.css";

export const AddCompanyBtn = (props) => {
  const { onAdd } = props;
  return (
    <div className="addBtn-container">
      <button onClick={onAdd} className="addBtn btn btn-primary" type="button">
        Add a new company
      </button>
    </div>
  );
};
