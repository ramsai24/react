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
          <span className="user-name-email-details-container">
            <span className="user-name">Ram Sai</span>
            <span className="user-email">ramsai24@24.com</span>
          </span>
          {/* <i className="fa-regular fa-user"></i> */}
          <img
            className="profile-icon-image"
            src="https://res.cloudinary.com/daoquetki/image/upload/v1706506968/2NDWEEKTASK-REACT/ps7lzvf0mbftnlscg4c3.png"
            alt="profile"
          />
        </span>
        <div className="user-navbar">
          <li className="user-nav-list-item">
            <img
              className="logo-of-side-nav"
              src="https://res.cloudinary.com/daoquetki/image/upload/v1706450282/2NDWEEKTASK-REACT/eseufn06oxekojsc2lum.png"
              alt="logo"
            />
            Home
          </li>
          <li className="user-nav-list-item">
            <img
              className="logo-of-side-nav"
              src="https://res.cloudinary.com/daoquetki/image/upload/v1706450509/2NDWEEKTASK-REACT/aar50kr6yod8rw1hdcjx.png"
              alt="logo"
            />
            Contact Us
          </li>
          <li className="user-nav-list-item">
            <img
              className="logo-of-side-nav"
              src="https://res.cloudinary.com/daoquetki/image/upload/v1706508203/2NDWEEKTASK-REACT/zldl8ve8zmisloxwjqrh.png"
              alt="logo"
            />
            Log Out
          </li>
        </div>
      </div>
    </div>
  );
};
