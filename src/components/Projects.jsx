import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ChevronRight } from "lucide-react";
import projectImage1 from "../assets/projects/project-1.png";
import projectImage2 from "../assets/projects/project-2.png";
import projectImage3 from "../assets/projects/project-3.png";
import projectImage4 from "../assets/projects/project-4.png";
import projectImage5 from "../assets/projects/project-5.png";

function Projects() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabPanel>
            <div className="projects__wrapper">
              <div className="projects__content">
                <div className="headline">
                  <span className="headline__subtitle">- React based</span>
                  <h2 className="headline__title">Kanban Board</h2>
                </div>
                <p>
                  A modern Kanban style task management application built with
                  React and Redux, offering an intuitive interface to create,
                  manage, and filter tasks with ease.
                </p>
                <a
                  href="https://github.com/1obanov/kanban-board"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Project details
                  <ChevronRight />
                </a>
              </div>
              <div className="projects__image">
                <img src={projectImage1} alt="kanban board" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="projects__wrapper">
              <div className="projects__content">
                <div className="headline">
                  <span className="headline__subtitle">- Javascript based</span>
                  <h2 className="headline__title">Todo app</h2>
                </div>
                <p>Minimalist to-do app built with plain JavaScript.</p>
                <a
                  href="https://github.com/1obanov/To-Do-App"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Project details
                  <ChevronRight />
                </a>
              </div>
              <div className="projects__image">
                <img src={projectImage2} alt="todo app" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="projects__wrapper">
              <div className="projects__content">
                <div className="headline">
                  <span className="headline__subtitle">- React based</span>
                  <h2 className="headline__title">Shop app</h2>
                </div>
                <p>
                  The Shop App is a dynamic React-based e-commerce application
                  that allows users to browse products, manage their cart and
                  wishlist, place orders, and handle account settings
                  seamlessly.
                </p>
                <a
                  href="https://github.com/1obanov/shop-app"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Project details
                  <ChevronRight />
                </a>
              </div>
              <div className="projects__image">
                <img src={projectImage3} alt="shop app" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="projects__wrapper">
              <div className="projects__content">
                <div className="headline">
                  <span className="headline__subtitle">- React based</span>
                  <h2 className="headline__title">Movie app</h2>
                </div>
                <p>
                  A modern movie application built with React, offering an easy
                  way to browse, search, and discover your favorite films with
                  sorting, filtering, and access to detailed movie insights.
                </p>
                <a
                  href="https://github.com/1obanov/movie-app"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Project details
                  <ChevronRight />
                </a>
              </div>
              <div className="projects__image">
                <img src={projectImage4} alt="movie app" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="projects__wrapper">
              <div className="projects__content">
                <div className="headline">
                  <span className="headline__subtitle">- React based</span>
                  <h2 className="headline__title">Recipe app</h2>
                </div>
                <p>
                  The Recipe App is a dynamic React-based application that
                  showcases the usage of React Router for seamless navigation
                  between different pages. The app provides a delightful
                  experience for users to explore various recipes, categories,
                  and more.
                </p>
                <a
                  href="https://github.com/1obanov/recipe-app"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Project details
                  <ChevronRight />
                </a>
              </div>
              <div className="projects__image">
                <img src={projectImage5} alt="recipe app" />
              </div>
            </div>
          </TabPanel>

          <TabList className="projects-tabs">
            <Tab className="projects-tab">
              <span className="projects-tab__number">01.</span>
              <h6 className="projects-tab__name">Kanban Board</h6>
            </Tab>
            <Tab className="projects-tab">
              <span className="projects-tab__number">02.</span>
              <h6 className="projects-tab__name">Todo app</h6>
            </Tab>
            <Tab className="projects-tab">
              <span className="projects-tab__number">03.</span>
              <h6 className="projects-tab__name">Shop app</h6>
            </Tab>
            <Tab className="projects-tab">
              <span className="projects-tab__number">04.</span>
              <h6 className="projects-tab__name">Movie app</h6>
            </Tab>
            <Tab className="projects-tab">
              <span className="projects-tab__number">05.</span>
              <h6 className="projects-tab__name">Recipe app</h6>
            </Tab>
          </TabList>
        </Tabs>
      </div>
    </section>
  );
}

export { Projects };
