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
                       <i class="fa-brands fa-react"></i>Home.jsx
                    </Link>

                    <Link className={classes.navItem} to="/about">
                        <i class="fa-brands fa-css3"></i>About.css
                    </Link>

                    <Link className={classes.navItem} to="/projects">
                        <i class="fa-brands fa-python"></i>Projects.py
                    </Link>

                    <Link className={classes.navItem} to="/contact">
                        <i class="fa-brands fa-html5"></i>Contact.html
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
