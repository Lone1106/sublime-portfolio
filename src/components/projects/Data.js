import FlashcardApp from "./img/Flashcard-app.webp";
import XyMedia from "./img/XY-Media.webp";
import Mockups from "./img/Mockups.webp";
import JBlog from "./img/jBlog.webp";
import Wallpapers from "./img/Wallpapers.webp";
import BEredesign from "./img/BEredesign.webp";

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
    img: BEredesign,
    alt: "BE label printer website redesign",
    title: "BE Label Printer website redesign",
    description:
      "Redesign of the website of a label printing company operating worldwide. Their current website doesnt reflect the modern and innovative approach of the company and looks quite outdated. The goal therefor was to give the company a more modern web presence.",
    software: [
      {
        id: 1,
        color: "purple",
        software: "Figma",
      },
    ],
    behance:
      "https://www.behance.net/gallery/181584337/BE-Label-Printer-website-redesign",
  },
  {
    id: 3,
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
    id: 4,
    type: "design",
    img: Wallpapers,
    alt: "Diverse Wallapapers",
    title: "diverse Wallpapers",
    description:
      "A collection of free to use and download wallpapers which I created over the time.",
    software: [
      {
        id: 1,
        color: "purple",
        software: "Affinity Photo",
      },
    ],
    behance:
      "https://www.behance.net/gallery/181346375/Collection-of-free-Wallpapers",
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
