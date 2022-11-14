import Sidebar from "../sidebar/Sidebar";
import Tabs from "../tabs/Tabs";
import TopBar from "../top-bar/TopBar";
import BottomBar from "../bottom-bar/BottomBar";

import classes from "./Sublime.module.css";

function Sublime() {
    return (
        <div className={classes.mainContainer}>
            <TopBar />
            <Tabs />
            <main className={classes.contentArea}></main>
            <Sidebar />
            <BottomBar />
        </div>
    );
}

export default Sublime;
