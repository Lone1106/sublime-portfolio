import classes from "./Sidebar.module.css";

function Sidebar() {
    return (
        <aside className={classes.sidebar}>
            <ul className={classes.list}>
                <li className={classes.file}>home.html</li>
                <li className={classes.file}>about.py</li>
                <li className={classes.file}>projects.tsx</li>
                <li className={classes.file}>contact.md</li>
            </ul>
        </aside>
    );
}

export default Sidebar;
