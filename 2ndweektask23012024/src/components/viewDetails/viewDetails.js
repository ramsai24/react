import "./viewDetails.css";

export const ViewDetails = (props) => {
  const { viewDetailsItem, onCloseViewDialog } = props;
  console.log(viewDetailsItem);
  const { empId, name, designation, department } = viewDetailsItem[0];
  console.log(empId, name, designation, department);

  return (
    <div className="viewDetails-container-tranparent-back">
      <div className="view-details-container">
        <h1>EmployeDetails</h1>
        <h5 className="details-head">
          Name :-<span className="span-element">{name}</span>{" "}
        </h5>
        <h5 className="details-head">
          EmpId :- <span className="span-element">{empId}</span>
        </h5>
        <h5 className="details-head">
          Designation :- <span className="span-element">{designation}</span>
        </h5>
        <h5 className="details-head">
          Department :- <span className="span-element">{department}</span>
        </h5>
        <button type="submit" className="close-btn" onClick={onCloseViewDialog}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
