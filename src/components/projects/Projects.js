import classes from "./Projects.module.css";
import FlashcardApp from "./img/Flashcard-app.webp";
import PortfolioDesign from "./img/Portfolio-website-design.webp";
import SamuraiWallpaper from "./img/Samurai-Wallpaper.webp";
import TerminalWebsite from "./img/Terminal-website.webp";
import NeonWallpaper from "./img/Neon-wallpaper.webp";
import MeguminWallpaper from "./img/Megumin.webp";
import SublimePortfolio from "./img/Sublime-portfolio.webp";
import AyameChan from "./img/Ayame-Bot.webp";

import Project from "./Project";

function Projects() {
    return (
        <section className={classes.projects}>
            <figure className={classes.workItems}>
                <h2 className={classes.header}>See my recent work</h2>
                <Project
                    img={SublimePortfolio}
                    alt="Image of sublime text themed portfolio design project."
                    title="Sublime Portfolio"
                    git="https://github.com/Lone1106/sublime-portfolio"
                    demo="https://janrei.de/"
                    tech={[
                        ["HTML", "red"],
                        ["CSS", "blue"],
                        ["React", "green"],
                    ]}
                    type="web"
                />
                <Project
                    img={FlashcardApp}
                    alt="Image of react flashcard app project."
                    title="Flashcard App"
                    git="https://github.com/Lone1106/flashcard-app"
                    demo="https://harmonious-platypus-6d8124.netlify.app"
                    tech={[
                        ["HTML", "red"],
                        ["CSS", "blue"],
                        ["React", "green"],
                        ["Firebase", "red"],
                    ]}
                    type="web"
                />
                <Project
                    img={TerminalWebsite}
                    alt="Image of terminal styled website design project."
                    title="Terminal Website"
                    git="https://github.com/Lone1106/terminal-website"
                    demo="https://prismatic-kleicha-141b84.netlify.app/"
                    tech={[
                        ["HTML", "red"],
                        ["CSS", "blue"],
                        ["JS", "yellow"],
                    ]}
                    type="web"
                />
                <Project
                    img={PortfolioDesign}
                    alt="Image of simple portolio website design project."
                    title="Simple Portfolio Design"
                    git="https://github.com/Lone1106/portfolio-website"
                    demo="https://wonderful-crepe-3883fd.netlify.app/"
                    tech={[
                        ["HTML", "red"],
                        ["Sass", "purple"],
                        ["JS", "yellow"],
                    ]}
                    type="web"
                />
                <Project
                    img={AyameChan}
                    alt="Image Ayame-chan discord bot project."
                    title="Ayame-chan Discord Bot"
                    tech={[["Python", "blue"]]}
                    type=""
                    buttonText="Github"
                    download="https://github.com/Lone1106/ayame-chan-discord-bot"
                />
                <Project
                    img={SamuraiWallpaper}
                    alt="Image of samurai wallpaper design."
                    title="Samurai Wallpaper"
                    tech={[["Affinity Photo", "purple"]]}
                    type=""
                    buttonText="Download"
                    download="https://drive.google.com/drive/folders/1RVRjNyu60PAgtwaDN5x58Dx3563UJkCy?usp=share_link"
                />
                <Project
                    img={MeguminWallpaper}
                    alt="Image of megumin badge design."
                    title="Megumin badge"
                    tech={[["Affinity Designer", "blue"]]}
                    type=""
                    buttonText="Download"
                    download="https://drive.google.com/drive/folders/1K5pVi_7K6nfEjwycDAsZqJ4mRr96294g?usp=share_link"
                />
                <Project
                    img={NeonWallpaper}
                    alt="Image of neon wallpaper design."
                    title="Neon Wallpaper"
                    tech={[["Affinity Photo", "purple"]]}
                    type=""
                    buttonText="Download"
                    download="https://drive.google.com/drive/folders/1Yd8jJU-yP-QXwTlVtJt7yIZ5XuZi_f6A?usp=share_link"
                />
            </figure>
        </section>
    );
}

export default Projects;
