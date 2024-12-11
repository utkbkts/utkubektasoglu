import GithubIcon from "/icon/github.png";
import LinkedinIcon from "/icon/linkedin.png";
import YoutubeIcon from "/icon/youtube.png";
const SocialIcon = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={GithubIcon}
        alt="github"
        className="w-10 h-10 cursor-pointer hover:opacity-50 transition-all duration-300"
      />
      <img
        src={LinkedinIcon}
        alt="linkedin"
        className="w-10 h-10  cursor-pointer hover:opacity-50 transition-all duration-300"
      />
      <img
        src={YoutubeIcon}
        alt="youtube"
        className="w-10 h-10  cursor-pointer hover:opacity-50 transition-all duration-300"
      />
    </div>
  );
};

export default SocialIcon;
