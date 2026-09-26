import RawSVG from "react-inlinesvg";
import html from "../assets/svg/html.svg";
import css from "../assets/svg/css.svg";
import javascript from "../assets/svg/javascript.svg";
import jquery from "../assets/svg/jquery.svg";
import sass from "../assets/svg/sass.svg";
import react from "../assets/svg/react.svg";
import angular from "../assets/svg/angular.svg";
import figma from "../assets/svg/figma.svg";

const SVG = RawSVG as React.ComponentType<any>;

interface SkillItem {
  icon: string;
  title: string;
  level: "Advanced" | "Regular" | "Junior";
}

const skillList: SkillItem[] = [
  { icon: html, title: "HTML", level: "Advanced" },
  { icon: css, title: "CSS", level: "Advanced" },
  { icon: javascript, title: "JavaScript", level: "Regular" },
  { icon: jquery, title: "jQuery", level: "Regular" },
  { icon: sass, title: "Sass", level: "Advanced" },
  { icon: react, title: "React", level: "Regular" },
  { icon: angular, title: "Angular", level: "Junior" },
  { icon: figma, title: "Figma", level: "Regular" },
];

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="headline">
          <span className="headline__subtitle">- Skills</span>
          <h2 className="headline__title">My Skills</h2>
        </div>
        <div className="skills__wrapper">
          {skillList.map((skill, index) => (
            <div key={index} className="skills__item">
              <div className="skills-block">
                <span className="skills-block__icon">
                  <SVG src={skill.icon} width={60} height={60} />
                </span>
                <span className="skills-block__level">{skill.level}</span>
                <h6 className="skills-block__title">{skill.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Skills };
