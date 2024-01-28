import "./viewDetails.css";

export const ViewDetails = (props) => {
  const { viewDetailsItem, onCloseViewDialog } = props;
  console.log(viewDetailsItem);
  const { empId, name, designation, department } = viewDetailsItem[0];
  console.log(empId, name, designation, department);

  return (
    <div className="view-details-container">
      <h1>EmployeDetails</h1>
      <h5>
        Name :-<span className="span-element">{name}</span>{" "}
      </h5>
      <h5>
        EmpId :- <span className="span-element">{empId}</span>
      </h5>
      <h5>
        Designation :- <span className="span-element">{designation}</span>
      </h5>
      <h5>
        Department :- <span className="span-element">{department}</span>
      </h5>
      <button type="submit" className="close-btn" onClick={onCloseViewDialog}>
        close
      </button>
    </div>
  );
};
