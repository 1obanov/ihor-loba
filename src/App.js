import { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Profile } from "./components/Profile";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const toggleMobileMenu = () => {
    setMobileMenuShow((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuShow ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuShow]);

  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add("preloaded");
      }, 1000);
    }

    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPreloader && (
        <div id="preloader">
          <div className="loader_line"></div>
        </div>
      )}
      <div className="wrapper">
        <Header
          mobileMenuShow={mobileMenuShow}
          toggleMobileMenu={toggleMobileMenu}
        />
        <Sidebar />
        <main className="main">
          <Home />
          <About />
          <Profile />
          <Services />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
