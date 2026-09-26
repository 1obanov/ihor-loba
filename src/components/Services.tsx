interface ServiceItem {
  title: string;
  text: string;
}

const serviceList: ServiceItem[] = [
  {
    title: "Web development",
    text: "Performance, quality, and sustainability — I craft web experiences designed to run smoothly and grow with your business.",
  },
  {
    title: "Responsive design",
    text: "I ensure that every website I build looks and works perfectly across all devices — from large desktop screens to tablets and smartphones.",
  },
  {
    title: "Web design",
    text: "I combine aesthetics with usability to create clean, intuitive, and visually appealing interfaces.",
  },
  {
    title: "Clean Code",
    text: "Writing clean, structured, and readable code is part of my everyday workflow. It makes future updates easier, improves team collaboration, and results in more reliable products.",
  },
  {
    title: "Photographic",
    text: "I enjoy photography as a creative outlet. It helps me stay inspired and sharpen my eye for detail — something I bring into my design and UI decisions as well.",
  },
  {
    title: "Have Fun",
    text: "I enjoy and get pleasure from what I am doing.",
  },
];

function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="headline">
          <span className="headline__subtitle">- Services</span>
          <h2 className="headline__title">My Services</h2>
        </div>
        <div className="services__wrapper">
          {serviceList.map((service, index) => (
            <div key={index} className="services__item">
              <div className="services-block">
                <span className="services-block__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h6 className="services-block__title">{service.title}</h6>
                <p className="services-block__text">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Services };
