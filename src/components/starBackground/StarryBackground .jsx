import Star from "../star/Star";

const StarryBackground = () => {
  const numStars = 100;
  const stars = Array.from({ length: numStars }, (_, i) => {
    const x = Math.random() * 100 + "vw";
    const y = Math.random() * 100 + "vh";
    const size = Math.random() * 3 + "px";
    return <Star key={i} x={x} y={y} size={size} />;
  });
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: "-1",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      {stars}
    </div>
  );
};

export default StarryBackground;
