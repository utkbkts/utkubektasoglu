import { Separator } from "@/components/ui/separator";
import { TiTick } from "react-icons/ti";
import Stars from "../Stars";
const progress = [
  {
    id: 1,
    title: "English",
    progress: 95,
  },
  {
    id: 2,
    title: "Turkish",
    progress: 100,
  },
];

const programmingLanguages = [
  {
    id: 1,
    title: "JavaScript",
    progress: 90,
  },
  {
    id: 2,
    title: "TypeScript",
    progress: 85,
  },
  {
    id: 3,
    title: "Python",
    progress: 70,
  },
  {
    id: 4,
    title: "Go",
    progress: 60,
  },
];

const analytics = [
  {
    id: 1,
    title: "Proficient in CI/CD pipelines for efficient software delivery",
    icon: <TiTick className="text-orange-500" />,
  },
  {
    id: 2,
    title:
      "Expert in resolving complex Git workflows and managing version control at scale",
    icon: <TiTick className="text-orange-500" />,
  },
  {
    id: 3,
    title:
      "Advanced expertise in SCSS, CSS3, and responsive design for modern web development",
    icon: <TiTick className="text-orange-500" />,
  },
  {
    id: 4,
    title:
      "Proven experience in developing scalable UI components using React and component-driven development",
    icon: <TiTick className="text-orange-500" />,
  },
  {
    id: 5,
    title:
      "Solid understanding and practical experience with Test-Driven Development (TDD) and Behavior-Driven Development (BDD) methodologies",
    icon: <TiTick className="text-orange-500" />,
  },
  {
    id: 6,
    title:
      "Extensive knowledge of Agile methodologies and hands-on experience in Scrum practices for efficient project delivery",
    icon: <TiTick className="text-orange-500" />,
  },
];

const Sidebar = () => {
  const calculateProgress = (progress: number) => {
    return (2 * Math.PI * 45 * progress) / 100;
  };

  return (
    <div className="">
      <div className="bg-[#242430] flex flex-col gap-2 items-center justify-center pt-6 pb-6 relative">
        <img
          src="/me.png"
          alt="me"
          title="me profile avatar"
          className="w-24 h-24 rounded-full object-cover ring-2 ring-orange-500 "
        />
        <Stars />
        <span>Utku Toygun Bektasoglu</span>
        <p className="text-muted-foreground text-sm">Software Developer</p>
      </div>
      <div className="overflow-y-auto h-[800px] scrollbar-hidden">
        <div className="flex flex-col gap-2 p-3">
          <div className="flex items-center justify-between">
            <span>Country:</span>
            <span className="text-muted-foreground">Türkiye</span>
          </div>
          <div className="flex items-center justify-between">
            <span>City:</span>
            <span className="text-muted-foreground">Istanbul</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Age:</span>
            <span className="text-muted-foreground">28</span>
          </div>
        </div>
        <div className="p-2">
          <Separator className="bg-[#696994]" />
        </div>
        <div className="flex items-center justify-center gap-4 p-3 text-white">
          {progress.map((item) => (
            <div
              key={item.id}
              className="flex relative flex-col items-center gap-2"
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 120 120"
                className="transform rotate-90"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#4A4A4A"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#FFA500"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 50}
                  strokeDashoffset={
                    2 * Math.PI * 45 - calculateProgress(item.progress)
                  }
                  style={{ transition: "stroke-dashoffset 1s ease-out" }}
                />
              </svg>
              <span className="text-muted-foreground absolute top-[40px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {item.progress}%
              </span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div className="p-2">
          <Separator className="bg-[#696994]" />
        </div>
        <div className="flex flex-col gap-2 p-3">
          {programmingLanguages.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span>{item.title}</span>
                <span>{item.progress}%</span>
              </div>
              <div className="h-1 bg-[#696994] rounded-full">
                <div
                  className="h-1 bg-[#FFA500] rounded-full"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-2">
          <Separator className="bg-[#696994]" />
        </div>
        <div className="p-3 flex flex-col gap-4">
          {analytics.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span className="text-sm text-muted-foreground">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
