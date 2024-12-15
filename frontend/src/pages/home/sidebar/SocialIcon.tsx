import { Link } from "react-router-dom";
import GithubIcon from "/icon/github.png";
import LinkedinIcon from "/icon/linkedin.png";
import YoutubeIcon from "/icon/youtube.png";
const SocialIcon = () => {
  return (
    <div className="flex items-center gap-2">
      <Link to={"https://github.com/utkbkts"} target="_blank">
        <img
          src={GithubIcon}
          alt="github"
          className="w-10 h-10 cursor-pointer hover:opacity-50 transition-all duration-300"
        />
      </Link>
      <Link to={"https://www.linkedin.com/in/utku-bektasoglu"} target="_blank">
        <img
          src={LinkedinIcon}
          alt="linkedin"
          className="w-10 h-10  cursor-pointer hover:opacity-50 transition-all duration-300"
        />
      </Link>
      <Link to={"https://www.youtube.com/@Fluent-Moments"} target="_blank">
        <img
          src={YoutubeIcon}
          alt="youtube"
          className="w-10 h-10  cursor-pointer hover:opacity-50 transition-all duration-300"
        />
      </Link>
    </div>
  );
};

export default SocialIcon;
