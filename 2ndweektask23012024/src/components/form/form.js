import { Component } from "react";
import "./form.css";

export class Form extends Component {
  constructor(props) {
    super(props);
    // const { submitFormDetails } = this.props;
    // // this.submitDetailss = submitFormDetails;
    this.state = { name: "", empId: "", designation: "", department: "" };
  }

  submitDetails = (event) => {
    event.preventDefault();
    const { submitFormDetails } = this.props;

    const { name, empId, designation, department } = this.state;

    const detailsObj = { name, empId, designation, department };
    submitFormDetails(detailsObj);
    // updateAddedNotificationList([detailsObj], "Added");
  };

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmpIdChange = (event) => {
    this.setState({ empId: event.target.value });
  };

  onDesignationChange = (event) => {
    this.setState({ designation: event.target.value });
  };

  onDepartmentChange = (event) => {
    this.setState({ department: event.target.value });
  };

  render() {
    const { onCloseAddDialog } = this.props;
    return (
      <div className="form-container-tranparent-back ">
        <form onSubmit={this.submitDetails} className="form-container">
          <div className="input-label-container">
            <label>Emp Id : </label>
            <input
              className="form-inputEl"
              type="text"
              placeholder="Enter Emp Id"
              onBlur={this.onEmpIdChange}
            />
          </div>
          <div className="input-label-container">
            <label>Name : </label>
            <input
              className="form-inputEl"
              type="text"
              placeholder="Enter Name"
              onBlur={this.onNameChange}
            />
          </div>
          <div className="input-label-container">
            <label>Designation : </label>
            <input
              className="form-inputEl"
              type="text"
              placeholder="Enter Designation"
              onBlur={this.onDesignationChange}
            />
          </div>
          <div className="input-label-container">
            <label>Department : </label>
            <input
              className="form-inputEl"
              type="text"
              placeholder="Enter Department"
              onBlur={this.onDepartmentChange}
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button
            type="submit"
            className="form-close-btn close-btn"
            onClick={onCloseAddDialog}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </button>
        </form>
      </div>
    );
  }
}
