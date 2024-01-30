import { Component } from "react";
import { DeleteConformation } from "../deleteConformation/deleteConformation";
import { formatDistanceToNow } from "date-fns";

import "./notification.css";

export class Notification extends Component {
  // constructor(props) {
  //   super(props);
  //   const { notificationListAdded, notificationListDeleted } = this.props;
  //   this.state = {
  //     notificationList: [...notificationListAdded, ...notificationListDeleted],
  //   };
  // }

  state = { isDimissAll: true, isDeleteCnfDialog: false, deleteId: "" };

  makeNotificationListUpdate = (id) => {
    const { updateNotificationList } = this.props;
    console.log(id);
    updateNotificationList(id);
    this.setState({ isDeleteCnfDialog: false });
  };

  deleteCnfDialogON = (event) => {
    this.setState({ isDeleteCnfDialog: true, deleteId: event.target.id });
  };

  deleteCnfDialogOff = () => {
    this.setState({ isDeleteCnfDialog: false });
  };

  renderBasedOnAddedOrDeleted = (name, status, id) => {
    // const { status } = this.props;

    switch (status) {
      case "Added":
        return (
          <div className="message-close-time-container">
            <div className="checked-message-container">
              <p className="message-top-heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  style={{ margin: "4px" }}
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                {`${name} is Added Successfully `}
              </p>
              <p className="message-top-para">{`${name} is Added Successfully `}</p>
            </div>
            <div className="close-time-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
                onClick={this.deleteCnfDialogON}
                id={id}
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>

              <span className="time-spanEl">
                {formatDistanceToNow(new Date())}
              </span>
            </div>
          </div>
        );
      case "Deleted":
        return (
          <div className="message-close-time-container">
            <div className="checked-message-container">
              <p className="message-top-heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  style={{ margin: "4px" }}
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                {`${name} is Deleted Successfully `}
              </p>
              <p className="message-top-para">{`${name} is Deleted Successfully `}</p>
            </div>
            <div className="close-time-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
                onClick={this.deleteCnfDialogON}
                id={id}
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>

              <span className="time-spanEl">
                {formatDistanceToNow(new Date())}
              </span>
            </div>
          </div>
        );
      default:
        return (
          <div className="message-close-time-container">
            <div className="checked-message-container">
              <p className="message-top-heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  style={{ margin: "4px" }}
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                {`${name} is Edited Successfully `}
              </p>
              <p className="message-top-para">{`${name} is Edited Successfully `}</p>
            </div>
            <div className="close-time-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
                onClick={this.deleteCnfDialogON}
                id={id}
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>

              <span className="time-spanEl">
                {formatDistanceToNow(new Date())}
              </span>
            </div>
          </div>
        );
    }
  };

  setDismissAll = () =>
    this.setState((prev) => ({ isDimissAll: !prev.isDimissAll }));

  render() {
    // const { notificationListAdded, notificationListDeleted } = this.props;
    // const notificationList = [
    //   ...notificationListAdded,
    //   ...notificationListDeleted,
    // ];
    const { notificationList, dismissNotificationPanel } = this.props;
    console.log(notificationList);
    const { isDimissAll, isDeleteCnfDialog, deleteId } = this.state;

    // const { makeNotificationListUpdate } = this.props;

    return (
      // <div>
      //   <h1>It is Group is Deleted</h1>
      //   <p>It is Group is Deleted</p>
      // </div>
      <div className="notifications-container">
        {isDeleteCnfDialog && (
          <DeleteConformation
            deleteId={deleteId}
            deleteCnfDialogOff={this.deleteCnfDialogOff}
            makeNotificationListUpdate={this.makeNotificationListUpdate}
          />
        )}

        <div className="notification-header-container">
          <h3>Notifications</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
            style={{ paddingBottom: "3px" }}
            onClick={dismissNotificationPanel}
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </div>

        <div className="notification-dismiss-all-container">
          <h6 className="more-events-heading">
            More events in the activity log
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              style={{ marginLeft: "3px" }}
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </h6>
          <button
            type="button"
            className="dimiss-btn"
            onClick={this.setDismissAll}
          >
            Dismiss all
            <i
              style={{ marginLeft: "5px" }}
              className="fa-solid fa-chevron-down"
            ></i>
          </button>
        </div>
        <div className="notification-panel" style={{ width: "100%" }}>
          {notificationList.length === 0 ? (
            <h1 className="no-event-head">No Events</h1>
          ) : (
            isDimissAll && (
              <ul className="list-item-container">
                {notificationList.map((each) => (
                  <li
                    className="notification-item-container"
                    key={`${each.id}with${each.status}`}
                    id={`${each.id}with${each.status}`}
                  >
                    {this.renderBasedOnAddedOrDeleted(
                      each.name,
                      each.status,
                      each.id
                    )}
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
      </div>
    );
  }
}
