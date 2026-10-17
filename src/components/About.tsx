interface ContactInfo {
  title: string;
  text: string;
  link: string;
  isExternal?: boolean;
}

const contactList: ContactInfo[] = [
  {
    title: "Located",
    text: "Cracow, Poland",
    link: "https://goo.gl/maps/dRMvLeSL5yBh2JyG9",
    isExternal: true,
  },
  {
    title: "Mail",
    text: "ihor.loba@gmail.com",
    link: "mailto:ihor.loba@gmail.com",
  },
  { title: "Phone", text: "+48 881 291 317", link: "tel:+48881291317" },
];

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__left">
            <div className="headline">
              <span className="headline__subtitle">- Nice to meet you!</span>
              <h2 className="headline__title">Ihor lobanov</h2>
              <p className="headline__text">
                Bringing design and code together
              </p>
            </div>
          </div>
          <div className="about__right">
            <div className="about__text">
              <p>
                Hello there! I'm <span>Ihor Lobanov</span>, a creative developer
                passionate about crafting digital experiences and bringing ideas
                to life through design and code.
              </p>
              <p>
                Proficient in JavaScript, HTML, CSS/SCSS, jQuery, and Figma,
                with hands-on experience in React. Skilled in translating UI/UX
                mockups into responsive, pixel-perfect web interfaces, with a
                strong focus on component architecture and design systems.
                Passionate about delivering clean, maintainable code and
                exceptional user experiences for modern web applications.
              </p>
            </div>
            <div className="info">
              {contactList.map((contact) => (
                <div key={contact.title} className="info__item">
                  <div className="info-block">
                    <span className="info-block__title">{contact.title}</span>
                    <a
                      className="info-block__link"
                      href={contact.link}
                      target={contact.isExternal ? "_blank" : undefined}
                      rel={contact.isExternal ? "noreferrer" : undefined}
                    >
                      {contact.text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { About };
