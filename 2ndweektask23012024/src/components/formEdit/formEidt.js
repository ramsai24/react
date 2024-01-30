import { Component } from "react";
import "./form.css";

export class FormEdit extends Component {
  constructor(props) {
    super(props);
    const { updateFormDetails } = this.props;
    // console.log(updateFormDetails);
    // // this.submitDetailss = submitFormDetails;
    this.state = {
      name: updateFormDetails[0].name,
      empId: updateFormDetails[0].empId,
      designation: updateFormDetails[0].designation,
      department: updateFormDetails[0].department,
      updObj: "",
    };
  }

  editCon = (event) => {
    event.preventDefault();
    const { isEditConformationDialog } = this.props;
    isEditConformationDialog();
    const {
      submitUpdatedDetails,
      updateFormDetails,
      recieveUpadateObjectDetails,
    } = this.props;
    const { id } = updateFormDetails[0];

    const { name, empId, designation, department } = this.state;

    const detailsObj = { name, empId, designation, department, id };
    recieveUpadateObjectDetails(detailsObj);

    this.setState({ updObj: detailsObj });
  };

  updateDetails = (event) => {
    event.preventDefault();
    const {
      submitUpdatedDetails,
      updateFormDetails,
      recieveUpadateObjectDetails,
    } = this.props;
    const { id } = updateFormDetails[0];

    const { name, empId, designation, department } = this.state;

    const detailsObj = { name, empId, designation, department, id };
    recieveUpadateObjectDetails(detailsObj);
    submitUpdatedDetails(detailsObj);
    console.log(detailsObj);
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
    const { onCloseEditDialog } = this.props;

    const { name, department, designation, empId } = this.state;
    // console.log(name, department, designation, empId);
    return (
      <div className="form-container-tranparent-back ">
        <form onSubmit={this.editCon} className="form-container">
          <div className="input-label-container">
            <label>Emp Id : </label>
            <input
              className="form-inputEl"
              type="text"
              placeholder="Enter Emp Id"
              onChange={this.onEmpIdChange}
              value={empId}
            />
          </div>
          <div className="input-label-container">
            <label>Name : </label>
            <input
              className="form-inputEl"
              type="text"
              placeholder="Enter Name"
              onChange={this.onNameChange}
              value={name}
            />
          </div>
          <div className="input-label-container">
            <label>Designation : </label>
            <input
              className="form-inputEl"
              type="text"
              placeholder="Enter Designation"
              onChange={this.onDesignationChange}
              value={designation}
            />
          </div>
          <div className="input-label-container">
            <label>Department : </label>
            <input
              className="form-inputEl"
              type="text"
              placeholder="Enter Department"
              onChange={this.onDepartmentChange}
              value={department}
            />
          </div>
          <button type="submit" className="submit-btn">
            Update
          </button>
          <button
            type="submit"
            className="form-close-btn close-btn"
            onClick={onCloseEditDialog}
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
