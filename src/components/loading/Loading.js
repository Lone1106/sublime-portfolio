import classes from "./Loading.module.css";

function Loading() {
  return (
    <section className={classes.wrapper}>
      <div className={classes.spinner}></div>
    </section>
  );
}

export default Loading;
