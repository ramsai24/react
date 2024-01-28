// import logo from "./logo.svg";
import { Component } from "react";
import { v4 } from "uuid";
import { TopBar } from "./components/topBar/topbar.js";
import { Sidenav } from "./components/sideNav/sidenav.js";
import { ContentTable } from "./components/content/content.js";
import { Notification } from "./components/notification/notification.js";
import "./App.css";

class App extends Component {
  state = {
    isSideNav: true,
    isNotification: false,
    notificationListDeleted: [],
    notificationListAdded: [],
    notificationList: [],
    status: "",
  };

  isSideNavOffOrOn = () => {
    // console.log(`Toggle Side Nav`);
    this.setState((prev) => ({
      isSideNav: !prev.isSideNav,
    }));
  };

  isNOtificationOffOrOn = () => {
    // console.log(`Toggle NOtification Nav`);
    this.setState((prev) => ({
      isNotification: !prev.isNotification,
    }));
  };

  updateAddedNotificationList = (addedName) => {
    // console.log(addedName);
    // console.log(`addedName :- ${addedName}`);
    let newAddedObj = { name: addedName, addedName, id: v4(), status: "Added" };
    // console.log(newAddedObj);
    this.setState((prev) => {
      return {
        notificationListAdded: [...prev.notificationListAdded, newAddedObj],
        notificationList: [...prev.notificationList, newAddedObj],
      };
    });
  };

  updateDeletedNotificationList = (deletedName) => {
    // console.log(`deletedName :- ${deletedName}`);
    let newAddedObj = {
      name: deletedName,
      deletedName,
      id: v4(),
      status: "Deleted",
    };
    // console.log(newAddedObj);
    this.setState((prev) => {
      return {
        notificationListDeleted: [...prev.notificationListDeleted, newAddedObj],
        notificationList: [...prev.notificationList, newAddedObj],
      };
    });
  };

  // updateAddedNotificationList = (newNotificationList, status) => {
  //   // console.log(newNotificationList);
  //   // console.log(newNotificationList[0]["id"]);
  //   // console.log(v4());

  //   const newObjInsert = [...newNotificationList];
  //   // console.log(newObjInsert);
  //   const newId = v4();
  //   // console.log(newId);
  //   newObjInsert[0].id = newId;
  //   // console.log(newObjInsert);
  //   // newNotificationList[0]["id"] = v4();
  //   this.setState((prev) => ({
  //     notificationListAdded: [...prev.notificationListAdded, newObjInsert[0]],
  //     status,
  //   }));
  // };

  // updateNotificationList = (newNotificationList, status) => {
  //   // console.log(newNotificationList);
  //   // console.log(newNotificationList[0]["id"]);
  //   // console.log(v4());

  //   const newObjInsert = [...newNotificationList];
  //   // console.log(newObjInsert);
  //   const newId = v4();
  //   // console.log(newId);
  //   newObjInsert[0].id = newId;
  //   // newObjInsert['status'] =
  //   // console.log(newObjInsert);
  //   // newNotificationList[0]["id"] = v4();
  //   this.setState((prev) => ({
  //     notificationListDeleted: [
  //       ...prev.notificationListDeleted,
  //       newObjInsert[0],
  //     ],
  //     status,
  //   }));
  // };

  updateNotificationList = (id) => {
    // console.log(event.target.id);
    const { notificationList } = this.state;

    const updateNotificationItemsList = notificationList.filter(
      (each) => each.id !== id
    );
    this.setState((prev) => ({
      notificationList: updateNotificationItemsList,
    }));
  };

  render() {
    const {
      isSideNav,
      isNotification,
      // notificationListAdded,
      // notificationListDeleted,
      notificationList,
      status,
    } = this.state;
    return (
      <div>
        <div className="App">
          <TopBar
            isNotification={isNotification}
            isSideNavToggle={this.isSideNavOffOrOn}
            isNotificationToggle={this.isNOtificationOffOrOn}
          />
          <div className="bottom-container">
            {/* <div style={{ border: "1px solid red" }}> */}
            {isSideNav && <Sidenav />}
            <ContentTable
              updateAddedNotificationList={this.updateAddedNotificationList}
              updateDeletedNotificationList={this.updateDeletedNotificationList}
            />
            {isNotification && (
              <Notification
                // notificationListDeleted={notificationListDeleted}
                // notificationListAdded={notificationListAdded}
                notificationList={notificationList}
                status={status}
                updateNotificationList={this.updateNotificationList}
                dismissNotificationPanel={this.isNOtificationOffOrOn}
              />
            )}
            {/* <Notification /> */}
            {/* <Sidenav /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// {
//   /* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */
// }
