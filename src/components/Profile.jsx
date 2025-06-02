import { useEffect } from "react";
import { GraduationCap, Building } from "lucide-react";

function Profile() {
  useEffect(() => {
    const bars = document.querySelectorAll(".bar");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const barInner = entry.target.querySelector(".bar__inner");
            const width = entry.target.getAttribute("data-width");
            barInner.style.width = width;
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    bars.forEach((bar) => observer.observe(bar));

    return () => {
      bars.forEach((bar) => observer.unobserve(bar));
    };
  }, []);

  return (
    <section id="profile" className="section profile">
      <div className="container">
        <div className="headline">
          <span className="headline__subtitle">- Profile</span>
          <h2 className="headline__title">Everything about me!</h2>
        </div>
        <div className="profile__wrapper">
          <div className="profile__item">
            <div className="profile-block">
              <h6 className="profile-block__title">Education</h6>
              <div className="profile-block__info">
                <div className="icon">
                  <GraduationCap />
                </div>
                <div className="text">
                  <h6>Cracow University of Economics</h6>
                  <span>Master of Arts in Computer science</span>
                </div>
              </div>
              <div className="profile-block__info">
                <div className="icon">
                  <GraduationCap />
                </div>
                <div className="text">
                  <h6>Bootcamp at Coders Lab</h6>
                  <span>
                    Learning programming languages, creating own projects.
                  </span>
                </div>
              </div>
              <div className="profile-block__info">
                <div className="icon">
                  <GraduationCap />
                </div>
                <div className="text">
                  <h6>Odessa National Maritime University</h6>
                  <span>
                    Bachelor of Arts in Marine Engineering (coastal/seafarers)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="profile__item">
            <div className="profile-block">
              <h6 className="profile-block__title">Work Experience</h6>
              <div className="profile-block__info">
                <div className="icon">
                  <Building />
                </div>
                <div className="text">
                  <h6>UI Front-End Developer</h6>
                  <span>ShelfNow</span>
                </div>
              </div>
              <div className="profile-block__info">
                <div className="icon">
                  <Building />
                </div>
                <div className="text">
                  <h6>HTML/Markup Developer</h6>
                  <span>ReliablePSD</span>
                </div>
              </div>
            </div>
          </div>
          <div className="profile__item">
            <div className="profile-block">
              <h6 className="profile-block__title">Languages</h6>
              <div className="profile-block__info">
                <div className="icon">
                  <p>EN</p>
                </div>
                <div className="text">
                  <h6>English</h6>
                  <div className="bar" data-width="80%">
                    <div className="bar__inner"></div>
                  </div>
                </div>
              </div>
              <div className="profile-block__info">
                <div className="icon">
                  <p>PL</p>
                </div>
                <div className="text">
                  <h6>Polish</h6>
                  <div className="bar" data-width="85%">
                    <div className="bar__inner"></div>
                  </div>
                </div>
              </div>
              <div className="profile-block__info">
                <div className="icon">
                  <p>UA</p>
                </div>
                <div className="text">
                  <h6>Ukranian</h6>
                  <div className="bar" data-width="100%">
                    <div className="bar__inner"></div>
                  </div>
                </div>
              </div>
              <div className="profile-block__info">
                <div className="icon">
                  <p>RU</p>
                </div>
                <div className="text">
                  <h6>Russian</h6>
                  <div className="bar" data-width="100%">
                    <div className="bar__inner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Profile };
