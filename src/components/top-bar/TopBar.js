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
      <div></div>
    </div>
  );
}

export default TopBar;
