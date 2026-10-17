import { Linkedin, Github } from "lucide-react";

function Social() {
  return (
    <ul className="social">
      <li className="social__item">
        <a
          className="social__link"
          href="https://www.linkedin.com/in/ihor-lobanov/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size="18" fill="#130f49" />
        </a>
      </li>
      <li>
        <a
          className="social__link"
          href="https://github.com/1obanov"
          target="_blank"
          rel="noreferrer"
        >
          <Github size="18" fill="#130f49" />
        </a>
      </li>
    </ul>
  );
}

export { Social };
