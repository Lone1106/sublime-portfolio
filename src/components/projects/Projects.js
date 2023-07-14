import classes from "./Projects.module.css";

import ProjectJS from "./ProjectJS";
import ProjectDesign from "./ProjectDesign";
import { dataDesign, dataJS } from "./Data";

function Projects() {
  return (
    <section className={classes.projects}>
      <h2 className={classes.header}>See my recent work</h2>
      <figure className={classes.workItems}>
        {dataJS.map((project) => {
          return (
            <ProjectJS
              key={project.id}
              img={project.img}
              alt={project.alt}
              title={project.title}
              description={project.description}
              git={project.git}
              demo={project.demo}
              tech={project.tech}
            />
          );
        })}

        {dataDesign.map((project) => {
          return (
            <ProjectDesign
              key={project.id}
              img={project.img}
              alt={project.alt}
              title={project.title}
              description={project.description}
              software={project.software}
              download={project.download}
            />
          );
        })}
      </figure>
    </section>
  );
}

export default Projects;
