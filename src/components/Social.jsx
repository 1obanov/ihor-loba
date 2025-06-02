import { Linkedin, Github } from "lucide-react";

function Social() {
  return (
    <ul className="social">
      <li>
        <a
          href="https://www.linkedin.com/in/ihor-lobanov/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size="18" fill="#130f49" />
        </a>
      </li>
      <li>
        <a href="https://github.com/1obanov" target="_blank" rel="noreferrer">
          <Github size="18" fill="#130f49" />
        </a>
      </li>
    </ul>
  );
}

export { Social };
