import SidebarTitle from "@/components/ui/title/SidebarTitle";

const Subscribe = () => {
  return (
    <div className="w-full">
      <SidebarTitle title="Subscribe" className="py-2" />
      <div className="mt-6">
        <div className="relative w-full overflow-hidden rounded-lg pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/LUw9PkQTWYU?si=E-CJmWBOalLbJFag"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
