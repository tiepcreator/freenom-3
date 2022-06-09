import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="border-t-2 border-white/[.15] text-center py-5">
      <a href="https://github.com/2202x2/freenom">
        <FontAwesomeIcon
          className="text-5xl opacity-20 hover:opacity-100"
          icon={faGithub}
        />
      </a>
    </div>
  );
}
