import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
const Dashboard = () => {
  const text = [
    "I Am A Web Developer",
    "I Am A Designer",
    "I Am A Freelancer",
    "I Am A Full stack developer",
    "I Am A Software engineer",
    "I Am A Programmer",
  ];
  const textTitle =
    "Talent hits a target no one else can hit. Genius hits a target no one else can see.";

  return (
    <div className="p-4">
      <div className="relative">
        <div className="flex img-fluid">
          <div className="flex flex-col md:items-start items-center gap-3 flex-[2] p-4 mt-7 md:ml-12 ">
            <motion.h1
              transition={{ duration: 1 }}
              className="font-bold md:text-[25px] text-[15px] md:text-left text-center"
            >
              {textTitle.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <span className="md:text-lg text-[15px]  text-white  p-2 rounded">
              <Typewriter
                options={{
                  strings: text,
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
            <button className="button-color uppercase py-2 px-4 text-black font-heading">
              Explore now
            </button>
          </div>
          <div className="flex-1 overflow-hidden lg:flex hidden">
            <img src="/me.png" alt="me" />
          </div>
        </div>
        <div className=" flex flex-col mt-8">
          <div className="flex space-y-2 flex-col text-center mb-14">
            <span className="md:text-5xl text-xl font-bold">
              Skill that i have
            </span>
            <span className="md:text-2xl text-[16px]">
              These are the tehnologies I've worked with
            </span>
          </div>
          <Marquee autoFill pauseOnClick>
            <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Node.js
            </div>
            <div className="bg-gradient-to-r from-gray-700 via-indigo-800 to-black m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              React
            </div>
            <div className="bg-gradient-to-r from-gray-800 via-teal-700 to-black m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              MongoDB
            </div>
            <div className="bg-gradient-to-r from-gray-600 via-orange-700 to-red-800 m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              PostgreSQL
            </div>

            <div className="bg-gradient-to-r from-yellow-600 via-orange-700 to-red-800 m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Firebase
            </div>
            <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              SCSS
            </div>
            <div className="bg-gradient-to-r from-red-600 via-pink-700 to-purple-900 m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Express
            </div>
            <div className="bg-gradient-to-r from-green-600 via-blue-700 to-purple-800 m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Prisma
            </div>
            <div className="bg-gradient-to-r from-black via-gray-800 to-black m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Next.js
            </div>
            <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              SQL
            </div>

            <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              RTK Query
            </div>
            <div className="bg-gradient-to-r from-yellow-600 via-blue-600 to-black m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              GraphQL
            </div>
            <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Apollo Client
            </div>
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Python
            </div>
            <div className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-400 m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Go
            </div>
            <div className="bg-gradient-to-r from-yellow-800 via-yellow-400 to-yellow-500 m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Javascript
            </div>
            <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Typescript
            </div>
          </Marquee>

          <Marquee autoFill pauseOnClick direction="right">
            <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Node.js
            </div>
            <div className="bg-gradient-to-r from-gray-700 via-indigo-800 to-black m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              React
            </div>
            <div className="bg-gradient-to-r from-gray-800 via-teal-700 to-black m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              MongoDB
            </div>
            <div className="bg-gradient-to-r from-gray-600 via-orange-700 to-red-800 m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              PostgreSQL
            </div>

            <div className="bg-gradient-to-r from-yellow-600 via-orange-700 to-red-800 m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Firebase
            </div>
            <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              SCSS
            </div>
            <div className="bg-gradient-to-r from-red-600 via-pink-700 to-purple-900 m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Express
            </div>
            <div className="bg-gradient-to-r from-green-600 via-blue-700 to-purple-800 m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Prisma
            </div>
            <div className="bg-gradient-to-r from-black via-gray-800 to-black m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Next.js
            </div>
            <div className="bg-gradient-to-r from-yellow-600 via-blue-600 to-black m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              SQL
            </div>
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Python
            </div>
            <div className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-400 m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Go
            </div>
            <div className="bg-gradient-to-r from-yellow-800 via-yellow-400 to-yellow-500 m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Javascript
            </div>
            <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 m-1 rounded-xl flex space-x-2 p-2 font-bold text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-200">
              Typescript
            </div>
          </Marquee>
          <div className="mt-32">
            <div className="bg-[#2C2C37] text-sm text-muted-foreground w-full p-2 flex md:flex-row flex-col items-center justify-between py-4">
              <span className="">© 2024 All Rights Reserved.</span>
              <div>
                <span className="select-all">
                  Email:utkutoygunbektasoglu@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
