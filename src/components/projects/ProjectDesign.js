import "../../Colors.css";
import classes from "./Projects.module.css";

function ProjectDesign({ img, alt, title, software, download }) {
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
                    {software.map((el) => {
                        return <li className={el[1]}>{el[0]}</li>;
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
