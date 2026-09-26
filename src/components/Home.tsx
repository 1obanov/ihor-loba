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
            <span className="subtitle">Front-end Developer</span>
            <p>
              I've always been drawn to the overlap between design and
              development. I enjoy each aspect and love building websites from
              start to finish, as part of a team delivering products for a
              global user base.
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
