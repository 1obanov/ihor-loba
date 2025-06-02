import SVG from "react-inlinesvg";
import html from "../assets/svg/html.svg";
import css from "../assets/svg/css.svg";
import javascript from "../assets/svg/javascript.svg";
import jquery from "../assets/svg/jquery.svg";
import sass from "../assets/svg/sass.svg";
import react from "../assets/svg/react.svg";
import angular from "../assets/svg/angular.svg";
import figma from "../assets/svg/figma.svg";

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="headline">
          <span className="headline__subtitle">- Skills</span>
          <h2 className="headline__title">My Skills</h2>
        </div>
        <div className="skills__wrapper">
          <div className="skills__item">
            <div className="skills-block">
              <div className="skills-block__icon">
                <SVG src={html} width={60} height={60} />
              </div>
              <span className="skills-block__level">Advanced</span>
              <h6 className="skills-block__title">HTML</h6>
            </div>
          </div>
          <div className="skills__item">
            <div className="skills-block">
              <div className="skills-block__icon">
                <SVG src={css} width={60} height={60} />
              </div>
              <span className="skills-block__level">Advanced</span>
              <h6 className="skills-block__title">CSS</h6>
            </div>
          </div>
          <div className="skills__item">
            <div className="skills-block">
              <div className="skills-block__icon">
                <SVG src={javascript} width={60} height={60} />
              </div>
              <span className="skills-block__level">Regular</span>
              <h6 className="skills-block__title">JavaScript</h6>
            </div>
          </div>
          <div className="skills__item">
            <div className="skills-block">
              <div className="skills-block__icon">
                <SVG src={jquery} width={60} height={60} />
              </div>
              <span className="skills-block__level">Regular</span>
              <h6 className="skills-block__title">jQuery</h6>
            </div>
          </div>
          <div className="skills__item">
            <div className="skills-block">
              <div className="skills-block__icon">
                <SVG src={sass} width={60} height={60} />
              </div>
              <span className="skills-block__level">Advanced</span>
              <h6 className="skills-block__title">Sass</h6>
            </div>
          </div>
          <div className="skills__item">
            <div className="skills-block">
              <div className="skills-block__icon">
                <SVG src={react} width={60} height={60} />
              </div>
              <span className="skills-block__level">Regular</span>
              <h6 className="skills-block__title">React</h6>
            </div>
          </div>
          <div className="skills__item">
            <div className="skills-block">
              <div className="skills-block__icon">
                <SVG src={angular} width={60} height={60} />
              </div>
              <span className="skills-block__level">Junior</span>
              <h6 className="skills-block__title">Angular</h6>
            </div>
          </div>
          <div className="skills__item">
            <div className="skills-block">
              <div className="skills-block__icon">
                <SVG src={figma} width={60} height={60} />
              </div>
              <span className="skills-block__level">Regular</span>
              <h6 className="skills-block__title">Figma</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Skills };
