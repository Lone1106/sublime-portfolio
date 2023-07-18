import "../../Colors.css";
import classes from "./Projects.module.css";

function ProjectDesign({
  img,
  alt,
  title,
  software,
  download,
  description
}) {
  return (
    <div className={classes.work}>
      <div className={classes.imageWrapper}>
        <img className={classes.image} src={img} alt={alt} loading="lazy" />
      </div>
      <div className={classes.info}>
        <h3>{title}</h3>
        <p className={classes.description}>{description}</p>
        <ul className={classes.list}>
          {software.map((el) => {
            return (
              <li key={el.id} className={el.color}>
                {el.software}
              </li>
            );
          })}
        </ul>
        <div className={classes.links}>
          <a
            className={classes.link}
            href={download}
            target="_blank"
            rel="noreferrer"
            data-type="download"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDesign;