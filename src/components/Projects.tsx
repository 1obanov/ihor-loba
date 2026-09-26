import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ChevronRight } from "lucide-react";
import projectImage1 from "../assets/projects/project-1.png";
import projectImage2 from "../assets/projects/project-2.png";
import projectImage3 from "../assets/projects/project-3.png";
import projectImage4 from "../assets/projects/project-4.png";
import projectImage5 from "../assets/projects/project-5.png";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  image: string;
  imageAlt: string;
}

const projectsList: ProjectItem[] = [
  {
    id: "kanban",
    title: "Kanban Board",
    subtitle: "React based",
    description:
      "A modern Kanban style task management application built with React and Redux, offering an intuitive interface to create, manage, and filter tasks with ease.",
    link: "https://github.com/1obanov/kanban-board",
    image: projectImage1,
    imageAlt: "kanban board",
  },
  {
    id: "todo",
    title: "Todo app",
    subtitle: "Javascript based",
    description: "Minimalist to-do app built with plain JavaScript.",
    link: "https://github.com/1obanov/To-Do-App",
    image: projectImage2,
    imageAlt: "todo app",
  },
  {
    id: "shop",
    title: "Shop app",
    subtitle: "React based",
    description:
      "The Shop App is a dynamic React-based e-commerce application that allows users to browse products, manage their cart and wishlist, place orders, and handle account settings seamlessly.",
    link: "https://github.com/1obanov/shop-app",
    image: projectImage3,
    imageAlt: "shop app",
  },
  {
    id: "movie",
    title: "Movie app",
    subtitle: "React based",
    description:
      "A modern movie application built with React, offering an easy way to browse, search, and discover your favorite films with sorting, filtering, and access to detailed movie insights.",
    link: "https://github.com/1obanov/movie-app",
    image: projectImage4,
    imageAlt: "movie app",
  },
  {
    id: "recipe",
    title: "Recipe app",
    subtitle: "React based",
    description:
      "The Recipe App is a dynamic React-based application that showcases the usage of React Router for seamless navigation between different pages. The app provides a delightful experience for users to explore various recipes, categories, and more.",
    link: "https://github.com/1obanov/recipe-app",
    image: projectImage5,
    imageAlt: "recipe app",
  },
];

function Projects() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          {projectsList.map((project) => (
            <TabPanel key={project.id}>
              <div className="projects__wrapper">
                <div className="projects__content">
                  <div className="headline">
                    <span className="headline__subtitle">
                      - {project.subtitle}
                    </span>
                    <h2 className="headline__title">{project.title}</h2>
                  </div>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Project details
                    <ChevronRight />
                  </a>
                </div>
                <div className="projects__image">
                  <img src={project.image} alt={project.imageAlt} />
                </div>
              </div>
            </TabPanel>
          ))}

          <TabList className="projects-tabs">
            {projectsList.map((project, index) => (
              <Tab key={project.id} className="projects-tab">
                <span className="projects-tab__number">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <h6 className="projects-tab__name">{project.title}</h6>
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </div>
    </section>
  );
}

export { Projects };
