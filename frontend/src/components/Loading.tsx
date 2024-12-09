import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <PulseLoader size={20} />
    </div>
  );
};

export default Loading;
