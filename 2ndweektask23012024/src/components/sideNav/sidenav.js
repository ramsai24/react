import "./sidenav.css";

export const Sidenav = () => {
  return (
    <ul className="side-nav">
      <li className="side-nav-list-item">
        <img
          className="logo-of-side-nav"
          src="https://res.cloudinary.com/daoquetki/image/upload/v1706450282/2NDWEEKTASK-REACT/eseufn06oxekojsc2lum.png"
          alt="logo"
        />
        Home
      </li>
      <li className="side-nav-list-item">
        <img
          className="logo-of-side-nav"
          src="https://res.cloudinary.com/daoquetki/image/upload/v1706450509/2NDWEEKTASK-REACT/aar50kr6yod8rw1hdcjx.png"
          alt="logo"
        />
        Contact Us
      </li>
      <li className="side-nav-list-item">
        <img
          className="logo-of-side-nav"
          src="https://res.cloudinary.com/daoquetki/image/upload/v1706450578/2NDWEEKTASK-REACT/wvk82jk25r6d0goeqrbf.png"
          alt="logo"
        />
        Phone
      </li>
      <li className="side-nav-list-item">
        <img
          className="logo-of-side-nav"
          src="https://res.cloudinary.com/daoquetki/image/upload/v1706450660/2NDWEEKTASK-REACT/rxarhyg5kczkgdik47gu.png "
          alt="logo"
        />
        Help
      </li>
    </ul>
  );
};
