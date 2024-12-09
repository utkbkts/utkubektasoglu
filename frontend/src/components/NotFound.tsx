import { Link } from "react-router-dom";
import notFound from "/not-found.gif";
import notFound2 from "/notfoundPage.jpg";
import Button from "./ui/button";
const NotFound = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col min-h-screen items-center justify-center gap-4 relative">
        <h1 className="font-bold text-3xl">Sanırım kayboldun sorun değil !!</h1>
        <img
          src={notFound}
          alt="not-found"
          title="notFound NotFoundPage"
          className="w-[800px] object-cover"
        />
        <Link className="font-bold text-3xl" to={"/"}>
          <Button size="lg" variant="outline" className="border-black">
            Ana Sayfa'ya Geri Dön.
          </Button>
        </Link>
        <img
          src={notFound2}
          alt="image"
          className="absolute -z-10 opacity-50 top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default NotFound;
