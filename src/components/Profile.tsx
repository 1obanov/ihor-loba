import { useEffect } from "react";
import { GraduationCap, Building } from "lucide-react";

interface TimelineItem {
  title: string;
  subtitle: string;
}
const educationList: TimelineItem[] = [
  {
    title: "Cracow University of Economics",
    subtitle: "Master of Arts in Computer science",
  },
  {
    title: "Bootcamp at Coders Lab",
    subtitle: "Learning programming languages, creating own projects.",
  },
  {
    title: "Odessa National Maritime University",
    subtitle: "Bachelor of Arts in Marine Engineering (coastal/seafarers)",
  },
];
const experienceList: TimelineItem[] = [
  {
    title: "UI Front-End Developer",
    subtitle: "ShelfNow",
  },
  {
    title: "HTML/Markup Developer",
    subtitle: "ReliablePSD",
  },
];

interface LanguageItem {
  code: string;
  name: string;
  level: string;
}
const languageList: LanguageItem[] = [
  { code: "EN", name: "English", level: "80%" },
  { code: "PL", name: "Polish", level: "85%" },
  { code: "UA", name: "Ukrainian", level: "100%" },
  { code: "RU", name: "Russian", level: "100%" },
];

function Profile() {
  useEffect(() => {
    const bars = document.querySelectorAll<HTMLElement>(".bar");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const barInner =
              entry.target.querySelector<HTMLElement>(".bar__inner");
            const width = entry.target.getAttribute("data-width");
            if (barInner && width) {
              barInner.style.width = width;
            }
          }
        });
      },
      {
        threshold: 0.3,
      },
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
              {educationList.map((item) => (
                <div key={item.title} className="profile-block__info">
                  <div className="icon">
                    <GraduationCap />
                  </div>
                  <div className="text">
                    <h6>{item.title}</h6>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="profile__item">
            <div className="profile-block">
              <h6 className="profile-block__title">Work Experience</h6>
              {experienceList.map((item) => (
                <div key={item.title} className="profile-block__info">
                  <div className="icon">
                    <Building />
                  </div>
                  <div className="text">
                    <h6>{item.title}</h6>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="profile__item">
            <div className="profile-block">
              <h6 className="profile-block__title">Languages</h6>
              {languageList.map((lang) => (
                <div key={lang.code} className="profile-block__info">
                  <div className="icon">
                    <p>{lang.code}</p>
                  </div>
                  <div className="text">
                    <h6>{lang.name}</h6>
                    <div className="bar" data-width={lang.level}>
                      <div className="bar__inner"></div>
                    </div>
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

export { Profile };
