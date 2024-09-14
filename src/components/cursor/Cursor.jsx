import { useEffect, useState } from "react";

const Cursor = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (e) => {
      setState({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <div
      style={{
        background: `radial-gradient(circle at ${state.x}px ${state.y}px, rgba(0, 2, 250, 0.2), rgba(0, 2, 250, 0.03) 400px, transparent 600px)`,
      }}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    ></div>
  );
};

export default Cursor;
