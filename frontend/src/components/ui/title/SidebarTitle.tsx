import { cn } from "@/utils/cn";

interface Props {
  title: string;
  className?: string;
}

const SidebarTitle = ({ title, className }: Props) => {
  return (
    <div>
      <div
        className={cn(
          "bg-[#1F2024]   h-full mt-8 rounded-lg flex items-center justify-between w-full",
          className
        )}
      >
        <span className="text-white font-bold text-center font-body w-full ">
          {title}
        </span>
      </div>
    </div>
  );
};

export default SidebarTitle;
