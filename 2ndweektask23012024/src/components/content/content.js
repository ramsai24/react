import { Component } from "react";
import { AddedSuccess } from "../addedSuccessRightTopCornerDialog/added";
import { DeletedDialog } from "../deletedTopRightCornerDialog/deleted";
import { ViewDetails } from "../viewDetails/viewDetails";
import { View } from "../view/veiw";
import { Add } from "../add/add";
import { Delete } from "../delete/delete";
import { Form } from "../form/form";
import { v4 } from "uuid";

import "./content.css";

const dataList = [
  {
    id: v4(),
    empId: "A1416",
    name: "Ram Sai",
    designation: "System Analyst",
    department: "Development",
  },
];

export class ContentTable extends Component {
  state = {
    isAddToggle: false,
    contentList: dataList,
    empId: "",
    name: "",
    designation: "",
    department: "",
    isSuccess: false,
    isSuccessName: "name",
    isView: false,
    viewDetails: "",
    isDeleted: false,
    deletedItem: "",
  };

  onViewDetails = (id) => {
    const { contentList } = this.state;

    const viewDetailsItemOfContentList = contentList.filter((each) => {
      if (each.id === id) {
        return each;
      }
      return null;
    });
    // console.log(viewDetailsItemOfContentList);
    this.setState({ viewDetails: viewDetailsItemOfContentList, isView: true });
  };

  onAdd = () => {
    // console.log(`Add Button is Working`);
    this.setState((prev) => ({
      isAddToggle: true,
    }));
  };

  submitFormDetails = (p) => {
    const { updateAddedNotificationList } = this.props;
    // console.log(`Submit is triggered`);
    // const { updateAddedNotificationList } = this.props;
    // console.log(p);
    // p["added"] = "Added";
    // p["newid"] = v4();
    // const makeArrayOfP = [p];
    // updateAddedNotificationList([...makeArrayOfP], "Added");
    p["id"] = v4();
    // p["status"] = "Added";
    this.setState((prev) => ({
      isAddToggle: false,
      contentList: [...prev.contentList, p],
      isSuccess: true,
      isSuccessName: p.name,
    }));
    // console.log(`p.name :====${p.name}`);

    updateAddedNotificationList(p.name);

    setTimeout(() => {
      this.setState({ isSuccess: false });
    }, 3000);
  };

  onCloseSuccessDialog = () => {
    this.setState((prev) => ({ isSuccess: false }));
  };

  onCloseDeletedDialog = () => {
    this.setState((prev) => ({ isDeleted: false }));
  };

  onCloseViewDialog = () => {
    this.setState((prev) => ({ isView: false }));
  };

  onCloseAddDialog = () => {
    this.setState((prev) => ({ isAddToggle: false }));
  };

  onDelete = (id) => {
    // console.log(id);
    const { updateDeletedNotificationList } = this.props;
    const { contentList } = this.state;
    // const { updateNotificationList } = this.props;

    const updateContentList = contentList.filter((each) => each.id !== id);

    // console.log(updateContentList);
    this.setState({ contentList: [...updateContentList] });

    const passToNotification = contentList.filter((each) => each.id === id);
    // passToNotification[0]["status"] = "Deleted";
    // updateNotificationList([...passToNotification], "Deleted");

    this.setState({ deletedItem: passToNotification[0].name, isDeleted: true });
    updateDeletedNotificationList(passToNotification[0].name);
    setTimeout(() => {
      this.setState({ isDeleted: false });
    }, 3000);
  };

  render() {
    const {
      contentList,
      isAddToggle,
      isSuccess,
      isSuccessName,
      viewDetails,
      isView,
      isDeleted,
      deletedItem,
    } = this.state;
    // console.log(contentList);
    // console.log(isSuccessName);
    // const { updateAddedNotificationList } = this.props;
    return (
      <div className="content-container">
        {isAddToggle && (
          <Form
            submitFormDetails={this.submitFormDetails}
            onCloseAddDialog={this.onCloseAddDialog}
            // updateAddedNotificationList={updateAddedNotificationList}
          />
        )}
        {isView && (
          <ViewDetails
            viewDetailsItem={viewDetails}
            onCloseViewDialog={this.onCloseViewDialog}
          />
        )}
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
            {contentList.map((each) => (
              <tr key={each.id}>
                <td>{each.empId}</td>
                <td>{each.name}</td>
                <td>{each.designation}</td>
                <td>{each.department}</td>
                <td className="action-column">
                  <Add onAdd={this.onAdd} />
                  <View onViewDetails={this.onViewDetails} id={each.id} />
                  <Delete onDelete={this.onDelete} id={each.id} />
                </td>
              </tr>
            ))}
            {/* {contentList.map((each) => (
            <div key={each.id}>
              <h1>{each.name}</h1>
            </div>
          ))} */}
          </tbody>
        </table>
        {isSuccess && (
          <AddedSuccess
            isSuccessName={isSuccessName}
            onCloseSuccessDialog={this.onCloseSuccessDialog}
          />
        )}
        {isDeleted && (
          <DeletedDialog
            deletedItem={deletedItem}
            onCloseDeletedDialog={this.onCloseDeletedDialog}
          />
        )}
      </div>
    );
  }
}
