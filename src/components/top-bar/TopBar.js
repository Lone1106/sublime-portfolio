import classes from "./TopBar.module.css";

function TopBar() {
  return (
    <div className={classes.top}>
      <div className={classes.dots}>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
      </div>
      <p className={classes.title}>Jan Reichherzer - Portfolio</p>
      <div>
        <ul className={classes.socials}>
          <li>
            <a
              href="https://www.linkedin.com/in/janrei1106/"
              className={classes.social}
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Lone1106"
              className={classes.social}
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-square-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/janreichherzer"
              className={classes.social}
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-square-behance"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;
