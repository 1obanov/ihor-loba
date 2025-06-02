function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__left">
            <div className="headline">
              <span className="headline__subtitle">- Nice to meet you!</span>
              <h2 className="headline__title">Ihor lobanov</h2>
              <p className="headline__text">Front-end Developer</p>
            </div>
          </div>
          <div className="about__right">
            <div className="text">
              <p>
                Hello there! My name is <span>Ihor Lobanov</span>. I am a
                dynamic and creative front-end developer with a passion for
                crafting digital experiences.
              </p>
              <p>
                I thrive on the intersection of design and technology,
                constantly seeking innovative ways to improve user interactions
                and enhance visual appeal. With a proven track record of
                delivering user-centric solutions, I bring a mix of artistic
                creativity and technical expertise. Through effective
                collaboration and a keen attention to detail, I strive to create
                interfaces that not only captivate users but also drive business
                objectives.
              </p>
            </div>
            <div className="info">
              <div className="info__item">
                <div className="info-block">
                  <span className="info-block__title">Located</span>
                  <a
                    href="https://goo.gl/maps/dRMvLeSL5yBh2JyG9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cracow, Poland
                  </a>
                </div>
              </div>
              <div className="info__item">
                <div className="info-block">
                  <span className="info-block__title">Mail</span>
                  <a href="mailto:ihor.loba@gmail.com">ihor.loba@gmail.com</a>
                </div>
              </div>
              <div className="info__item">
                <div className="info-block">
                  <span className="info-block__title">Phone</span>
                  <a href="tel:+48881291317">+48 881 291 317</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { About };
