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
    // const { submitFormDetails } = this.props;
    return (
      <form onSubmit={this.submitDetails} className="form-container">
        <div className="input-label-container">
          <label>Emp Id : </label>
          <input
            type="text"
            placeholder="Enter Emp Id"
            onBlur={this.onEmpIdChange}
          />
        </div>
        <div className="input-label-container">
          <label>Name : </label>
          <input
            type="text"
            placeholder="Enter Name"
            onBlur={this.onNameChange}
          />
        </div>
        <div className="input-label-container">
          <label>Designation : </label>
          <input
            type="text"
            placeholder="Enter Designation"
            onBlur={this.onDesignationChange}
          />
        </div>
        <div className="input-label-container">
          <label>Department : </label>
          <input
            type="text"
            placeholder="Enter Department"
            onBlur={this.onDepartmentChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
