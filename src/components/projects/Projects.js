import classes from "./Projects.module.css";

import ProjectJS from "./ProjectJS";
import ProjectDesign from "./ProjectDesign";
import { projectsData } from "./Data";

function Projects() {
  return (
    <section className={classes.projects}>
      <h2 className={classes.header}>See my recent work</h2>
      <figure className={classes.workItems}>
        {projectsData.map((project) => {
          if (project.type === "web") {
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
          } else if (project.type === "design") {
            return (
              <ProjectDesign
                key={project.id}
                img={project.img}
                alt={project.alt}
                title={project.title}
                description={project.description}
                software={project.software}
                link={project.behance}
              />
            );
          }
        })}
      </figure>
    </section>
  );
}

export default Projects;
