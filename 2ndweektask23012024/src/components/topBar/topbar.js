import "./topbar.css";

export const TopBar = (props) => {
  const { isSideNavToggle, isNotificationToggle, isNotification } = props;

  const isNotificationWhite = isNotification
    ? "notification-icon-white"
    : "notification-icon";

  // console.log(isNotificationWhite);

  return (
    <div className="topbar-container">
      <span className="side-nav-toggle" onClick={isSideNavToggle}>
        <i className="fa-solid fa-bars"></i>
        <span className="microsoft-azure">Microsoft Azure</span>
      </span>

      <div className="search-container">
        <label htmlFor="searchEl">
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        <input id="searchEl" type="text" placeholder="Search...." />
      </div>
      <div className="notification-profile-container">
        {/* <span
          className={
            isNotification ? "notification-icon-white" : "notification-icon"
          }
          onClick={isNotificationToggle}
        >
          <i className="fa-regular fa-envelope"></i>
        </span> */}
        <span
          className={`notification-icon ${isNotificationWhite}`}
          onClick={isNotificationToggle}
        >
          <i className="fa-regular fa-envelope"></i>
        </span>
        <span className="profile-user-icon">
          <i className="fa-regular fa-user"></i>
        </span>
        <div className="user-navbar">
          <li>Home</li>
          <li>Contact Us</li>
          <li>Log Out</li>
        </div>
      </div>
    </div>
  );
};
