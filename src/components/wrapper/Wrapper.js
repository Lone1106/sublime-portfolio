import Sidebar from "../sidebar/Sidebar";
import Tabs from "../tabs/Tabs";

import classes from "./Wrapper.module.css";

function Wrapper({ comp }) {
  return (
    <section className={classes.wrapper}>
      <Tabs />
      <Sidebar />
      {comp}
    </section>
  );
}

export default Wrapper;
