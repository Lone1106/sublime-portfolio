import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import Sidebar from "../sidebar/Sidebar";
import Tabs from "../tabs/Tabs";
import TopBar from "../top-bar/TopBar";
import BottomBar from "../bottom-bar/BottomBar";

import classes from "./Sublime.module.css";

const Home = lazy(() => import("../home/Home"));
const Projects = lazy(() => import("../projects/Projects"));
const About = lazy(() => import("../about/About"));
const Contact = lazy(() => import("../contact/Contact"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "about",
        element: <About />,
    },
    {
        path: "projects",
        element: <Projects />,
    },
    {
        path: "contact",
        element: <Contact />,
    },
]);

function Sublime() {
    return (
        <div className={classes.mainContainer}>
            <TopBar />
            <Tabs />
            <main className={classes.contentArea}>
                <Suspense fallback={<h1>Error</h1>}>
                    <RouterProvider router={router}></RouterProvider>
                </Suspense>
            </main>
            <Sidebar />
            <BottomBar />
        </div>
    );
}

export default Sublime;
