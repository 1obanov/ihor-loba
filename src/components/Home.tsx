import resume from "../files/IhorLobanov.pdf";
import image from "../assets/image.png";

function Home() {
  return (
    <section id="home" className="section home">
      <div className="container">
        <div className="home__wrapper">
          <div className="home__content">
            <h1 className="title">
              Hi, I'm <span className="title__name">Ihor!</span> <br />
              Creative Coder
            </h1>
            <span className="subtitle">UI Front-end Developer</span>
            <p>
              I've always been drawn to the intersection of design and
              development. I love turning ideas into polished, responsive
              websites, combining visual precision with clean, maintainable code
              to create meaningful user experiences.
            </p>
            <div className="buttons">
              <a href={resume} className="btn" download="IhorLobanov.pdf">
                Download CV
              </a>
              <a href="#contact" className="btn btn--outline">
                Let's talk
              </a>
            </div>
          </div>
          <div className="home__image">
            <img src={image} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Home };
