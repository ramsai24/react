import "./topbar.css";

export const TopBar = (props) => {
  const { isSideNavToggle, isNotificationToggle } = props;
  return (
    <div className="topbar-container">
      <span onClick={isSideNavToggle}>
        <i className="fa-solid fa-bars"></i>
      </span>

      <div className="search-container">
        <input id="searchEl" type="text" placeholder="Search...." />
        <label htmlFor="searchEl">
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
      </div>
      <div className="notification-profile-container">
        <span onClick={isNotificationToggle}>
          <i className="fa-regular fa-envelope"></i>
        </span>

        <i className="fa-regular fa-user"></i>
      </div>
    </div>
  );
};
