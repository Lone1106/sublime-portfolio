import classes from "./Projects.module.css";

import ProjectJS from "./ProjectJS";
import ProjectDesign from "./ProjectDesign";
import ProjectPY from "./ProjectPY";
import { dataDesign, dataJS, dataPY } from "./Data";

function Projects() {
    return (
        <section className={classes.projects}>
            <figure className={classes.workItems}>
                <h2 className={classes.header}>See my recent work</h2>

                {dataDesign.map((project) => {
                    return (
                        <ProjectDesign
                            img={project.img}
                            alt={project.alt}
                            title={project.title}
                            software={project.software}
                            download={project.download}
                        />
                    );
                })}

                {dataJS.map((project) => {
                    return (
                        <ProjectJS
                            img={project.img}
                            alt={project.alt}
                            title={project.title}
                            git={project.git}
                            demo={project.demo}
                            tech={project.tech}
                        />
                    );
                })}

                {dataPY.map((project) => {
                    return (
                        <ProjectPY
                            img={project.img}
                            alt={project.alt}
                            title={project.title}
                            tech={project.tech}
                            git={project.git}
                        />
                    );
                })}
            </figure>
        </section>
    );
}

export default Projects;
