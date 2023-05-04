import "../../Colors.css";
import classes from "./Projects.module.css";

function ProjectPY({ img, alt, title, tech, git }) {
    return (
        <div className={classes.work}>
            <div className={classes.imageWrapper}>
                <img
                    className={classes.image}
                    src={img}
                    alt={alt}
                    loading="lazy"
                />
            </div>
            <div className={classes.info}>
                <h4>{title}</h4>
                <ul className={classes.list}>
                    {tech.map((el) => {
                        return <li className={el[1]}>{el[0]}</li>;
                    })}
                </ul>
                <div className={classes.links}>
                    <a
                        className={classes.link}
                        href={git}
                        target="_blank"
                        rel="noreferrer"
                        data-type="download"
                    >
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectPY;
