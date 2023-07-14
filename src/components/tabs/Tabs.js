import { NavLink } from "react-router-dom";

import classes from "./Tabs.module.css";

function Tabs() {
  const activeLink = `${classes.link} ${classes.linkActive}`;
  const link = `${classes.link}`;

  return (
    <nav className={classes.tabs}>
      <ul className={classes.tabList}>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : link)}
          to="/"
        >
          Home.py
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? activeLink : link)}
          to="/about"
        >
          About.jsx
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : link)}
          to="/work"
        >
          Work.css
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : link)}
          to="/contact"
        >
          Contact.html
        </NavLink>
      </ul>
      <div className={classes.filler}></div>
    </nav>
  );
}

export default Tabs;
