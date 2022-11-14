import classes from "./BottomBar.module.css";

function BottomBar() {
    return (
        <aside className={classes.bottom}>
            <div className={classes.left}>
                <ul className={classes.socials}>
                    <li>
                        <a
                            href="https://github.com/Lone1106"
                            className={classes.social}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <i className="fa-brands fa-linkedin"></i>LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/janrei1106/"
                            className={classes.social}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <i className="fa-brands fa-square-github"></i>Github
                        </a>
                    </li>
                </ul>
            </div>
            <div className={classes.right}>
                <p>
                    <i className="fa-solid fa-code-branch"></i>main
                </p>
                <p>Spaces: 4</p>
            </div>
        </aside>
    );
}

export default BottomBar;
