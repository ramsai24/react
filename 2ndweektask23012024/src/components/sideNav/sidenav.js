import { Add } from "../add/add";
import "./sidenav.css";

export const Sidenav = (props) => {
  const { updateAddFunctionality } = props;
  const addFun = () => {
    updateAddFunctionality();
  };

  return (
    <ul className="side-nav">
      <li className="side-nav-list-item" onClick={addFun}>
        <img
          className="logo-of-side-nav"
          src="https://res.cloudinary.com/daoquetki/image/upload/v1706505675/2NDWEEKTASK-REACT/tkkwbb1mlmwgn9elchtr.png"
          alt="logo"
        />
        Overview
      </li>
      <li className="side-nav-list-item">
        <img
          className="logo-of-side-nav"
          src="https://res.cloudinary.com/daoquetki/image/upload/v1706505675/2NDWEEKTASK-REACT/hxtuj4vx0lljkpd6fha8.png"
          alt="logo"
        />
        Activity Log
      </li>
      <li className="side-nav-list-item">
        <img
          className="logo-of-side-nav"
          src="https://res.cloudinary.com/daoquetki/image/upload/v1706505675/2NDWEEKTASK-REACT/trwkpbtivqhesvxaidba.png"
          alt="logo"
        />
        Tag
      </li>
      <li className="side-nav-list-item">
        <img
          className="logo-of-side-nav"
          src="https://res.cloudinary.com/daoquetki/image/upload/v1706505675/2NDWEEKTASK-REACT/awnxmpe5ucdjqr9k3pjo.png"
          alt="logo"
        />
        Diagnose
      </li>
      <li className="side-nav-list-item">
        <img
          className="logo-of-side-nav"
          src="https://res.cloudinary.com/daoquetki/image/upload/v1706506266/2NDWEEKTASK-REACT/jczlmmu9yv6ckbjmokbm.png"
          alt="logo"
        />
        Access Control
      </li>

      <li className="side-nav-list-item">
        <img
          className="logo-of-side-nav"
          src="https://res.cloudinary.com/daoquetki/image/upload/v1706506265/2NDWEEKTASK-REACT/hve4vew3dkvltcvmjgty.png"
          alt="logo"
        />
        Data Migration
      </li>

      <li className="side-nav-list-item">
        <img
          className="logo-of-side-nav"
          src="https://res.cloudinary.com/daoquetki/image/upload/v1706506266/2NDWEEKTASK-REACT/oqqubjvgm1w8a17hhohn.png"
          alt="logo"
        />
        Events
      </li>

      <li className="side-nav-list-item">
        <img
          className="logo-of-side-nav"
          src="https://res.cloudinary.com/daoquetki/image/upload/v1706506267/2NDWEEKTASK-REACT/bgg4camywt3jntm5see6.png"
          alt="logo"
        />
        Storage Browser
      </li>

      <li className="side-nav-list-item">
        <img
          className="logo-of-side-nav"
          src="https://res.cloudinary.com/daoquetki/image/upload/v1706506266/2NDWEEKTASK-REACT/gpuneyhgkku0awle2gy3.png"
          alt="logo"
        />
        Storage Mover
      </li>

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
      <ul className=" side-nav-data-storage-container">
        <h6 className="data-storage-head">Data Storage</h6>
        <li className="side-nav-list-item">
          <img
            className="logo-of-side-nav"
            src="https://res.cloudinary.com/daoquetki/image/upload/v1706450578/2NDWEEKTASK-REACT/wvk82jk25r6d0goeqrbf.png"
            alt="logo"
          />
          Container
        </li>
        <li className="side-nav-list-item">
          <img
            className="logo-of-side-nav"
            src="https://res.cloudinary.com/daoquetki/image/upload/v1706509058/2NDWEEKTASK-REACT/emhzm9vd59erp8c20ohs.png"
            alt="logo"
          />
          Queue
        </li>
        <li className="side-nav-list-item">
          <img
            className="logo-of-side-nav"
            src="https://res.cloudinary.com/daoquetki/image/upload/v1706509273/2NDWEEKTASK-REACT/veq1ead3anox6fggf27a.png"
            alt="logo"
          />
          Tables
        </li>
      </ul>
    </ul>
  );
};
