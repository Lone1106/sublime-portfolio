import { Link } from "react-router-dom";

import classes from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={classes.sidebar}>
      <p className={classes.folders}>Folders</p>
      <p className={classes.folder}>
        <i className="fa-solid fa-folder-open"></i>Portfolio
      </p>
      <ul className={classes.sideNav}>
        <li>
          <Link className={classes.navItem} to="/">
            <i className="fa-brands fa-python"></i>Home.py
          </Link>

          <Link className={classes.navItem} to="/about">
            <i className="fa-brands fa-react"></i>About.jsx
          </Link>

          <Link className={classes.navItem} to="/work">
            <i className="fa-brands fa-css3"></i>Work.css
          </Link>

          <Link className={classes.navItem} to="/contact">
            <i className="fa-brands fa-html5"></i>Contact.html
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
