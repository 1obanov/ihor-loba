import { useState, useEffect } from "react";

interface MenuProps {
  handleLinkClick?: () => void;
}

function Menu({ handleLinkClick }: MenuProps) {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section");

    const handleScroll = () => {
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 4) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      const scrollBottom = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollBottom >= pageHeight - 1) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="menu">
      <ul className="menu__list">
        {["home", "about", "services", "skills", "projects", "contact"].map(
          (section) => (
            <li key={section} className="menu__item">
              <a
                href={`#${section}`}
                className={
                  activeSection === section
                    ? "menu__link menu__link--active"
                    : "menu__link"
                }
                onClick={handleLinkClick}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export { Menu };
