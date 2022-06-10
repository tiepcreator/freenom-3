import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="px-7 mx-auto text-center">
      <div className="bg-white opacity-20 w-auto border-2 border-white rounded-[25px] my-5"></div>
      <a href="https://github.com/2202x2/freenom">
        <FontAwesomeIcon
          className="text-5xl opacity-20 hover:opacity-100"
          icon={faGithub}
        />
      </a>
    </div>
  );
}
