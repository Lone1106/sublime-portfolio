import XyMedia from "./img/XY-Media.webp";
import JBlog from "./img/jBlog.webp";
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
    type: "web",
    img: BEredesign,
    alt: "BE label website redesign",
    title: "BE Label website redesign",
    description:
      "Redesign of the website of a label printing company operating world wide. Their current website doesnt reflect the modern and innovative approach of the company and looks quite outdated. The goal therefor was to give the company a more modern web presence.",
    git: "https://github.com/Lone1106/be-label",
    demo: "https://luminous-treacle-b8cb1e.netlify.app/",
    tech: [
      {
        id: 1,
        color: "green",
        tech: "React",
      },
      {
        id: 2,
        color: "blue",
        tech: "Tailwind",
      },
    ],
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
];
