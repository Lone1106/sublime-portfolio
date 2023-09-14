import FlashcardApp from "./img/Flashcard-app.webp";
import XyMedia from "./img/XY-Media.webp";
import Mockups from "./img/Mockups.webp";
import JBlog from "./img/jBlog.webp";
import PortfolioCatalina from "./img/Portfolio-catalina.webp";
import SteffisFußpflege from "./img/Steffis-fußpflege.webp";

export const projectsData = [
  {
    id: 1,
    type: "web",
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
    type: "design",
    img: SteffisFußpflege,
    alt: "Image of website design Steffis Fußpflege",
    title: "Chiropody Salon Website Design",
    description:
      "Website design for a local one person run chiropody salon.",
    software: [
      {
        id: 1,
        color: "purple",
        software: "Figma",
      },
    ],
    behance:
      "https://www.behance.net/gallery/180002583/Chiropody-Salon-Website-Design",
  },
  {
    id: 3,
    type: "design",
    img: PortfolioCatalina,
    alt: "Image of catalina portfolio redesign",
    title: "Portfolio Redesign",
    description:
      "Potfolio page redesign for a exising portoflio page of a 3D game design student. The design is kept simple enough to be implemented with website builders like Wix easily.",
    software: [
      {
        id: 1,
        color: "purple",
        software: "Figma",
      },
    ],
    behance:
      "https://www.behance.net/gallery/178502985/3D-game-design-student-portfolio-redesign",
  },
  {
    id: 4,
    type: "web",
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
    id: 5,
    type: "design",
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
    behance:
      "https://www.behance.net/gallery/178505525/Mockup-Template-Set",
  },
  {
    id: 6,
    type: "web",
    img: FlashcardApp,
    alt: "Image of react flashcard app project",
    title: "Flashy - Flashcard App",
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
];
