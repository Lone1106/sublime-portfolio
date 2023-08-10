import FlashcardApp from "./img/Flashcard-app.webp";
import XyMedia from "./img/XY-Media.webp";
import TerminalWebsite from "./img/Terminal-website.webp";
import Mockups from "./img/Mockups.webp";
import JBlog from "./img/jBlog.webp";

export const dataDesign = [
  {
    id: 1,
    img: Mockups,
    alt: "Image of mockup designs",
    title: "Mockup set",
    description:
      "A free to use apple inspired mockup set of various devices. It's a perfect set for you to place your web designs on and showcase them on your portfolio!",
    software: [
      {
        id: 1,
        color: "purple",
        software: "Affinity Photo",
      },
    ],
    download:
      "https://drive.google.com/drive/folders/1Ekqos6otfM-iPDgB3hLWPLztV-D7bExH?usp=share_link",
  },
];

export const dataJS = [
  {
    id: 1,
    img: JBlog,
    alt: "Image of jBlog practice project",
    title: "jBlog - Blog Website",
    description:
      "A full fledged blog website project to get more familiar with VueJS, Vue-router and Vuex.",
    git: "https://github.com/Lone1106/jBlog",
    demo: "https://fanciful-kataifi-874129.netlify.app/",
    tech: [
      {
        id: 1,
        color: "green",
        tech: "Vue",
      },
      {
        id: 2,
        color: "blue",
        tech: "Tailwind",
      },
    ],
  },
  {
    id: 2,
    img: XyMedia,
    alt: "Image of simple business website design project",
    title: "Simple Business Website",
    description:
      "A minimal themed business website for selling digital goods. The main points of this site were trying out TailwindCSS as well as building a shopping cart in vanilla JS.",
    git: "https://github.com/Lone1106/minimal-business",
    demo: "https://leafy-sprinkles-8fa441.netlify.app/",
    tech: [
      {
        id: 1,
        color: "red",
        tech: "HTML",
      },
      {
        id: 2,
        color: "blue",
        tech: "Tailwind",
      },
      {
        id: 3,
        color: "yellow",
        tech: "JS",
      },
    ],
  },
  {
    id: 3,
    img: FlashcardApp,
    alt: "Image of react flashcard app project",
    title: "Flashy- Flashcard App",
    description:
      "A basic flashcard application built with react and firebase. It's main use was as a practice project to get myself more familiar with react, routing and using firebase as a backend service.",
    git: "https://github.com/Lone1106/flashcard-app",
    demo: "https://harmonious-platypus-6d8124.netlify.app",
    tech: [
      {
        id: 1,
        color: "green",
        tech: "React",
      },
      {
        id: 2,
        color: "red",
        tech: "Firebase",
      },
    ],
  },
  {
    id: 4,
    img: TerminalWebsite,
    alt: "Image of terminal styled website project",
    title: "Terminal Website",
    description:
      "A termimal styled portfolio website. The main use of this project was to get myself more familiar with vanilla javascript and how to use it.",
    git: "https://github.com/Lone1106/terminal-website",
    demo: "https://prismatic-kleicha-141b84.netlify.app/",
    tech: [
      {
        id: 1,
        color: "red",
        tech: "HTML",
      },
      {
        id: 2,
        color: "blue",
        tech: "CSS",
      },
      {
        id: 3,
        color: "yellow",
        tech: "JS",
      },
    ],
  },
];
