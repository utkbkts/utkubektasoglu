import Sidebar from "../components/Sidebar";
import WebTecnologies from "../components/webTecnologies/WebTecnologies";
import FrontEndTecnologies from "../components/front-end/FrontEndTecnologies";
import { AccountDetail, flags } from "../content/Data";
import { motion } from "framer-motion";
import BackendTechnologies from "../components/backend/BackendTechnologies";
import NoSql from "../components/nosql/NoSql";
import Sql from "../components/sqlPage/SqlPage";
import Storage from "../components/storage/Storage";
import Orchestration from "../components/orchestration/Orchestration";
import PropTypes from "prop-types";
const HomePage = ({ handleChangeLanguage, t, setTabs, tabs }) => {
  return (
    <div className="font-ro w-full h-screen">
      <div className="flex max-w-5xl mx-auto items-start justify-center">
        <div className="flex-1 sticky top-0 lg:block hidden">
          <Sidebar setTabs={setTabs} tabs={tabs} t={t} />
        </div>

        <div className="lg:flex-[2] w-full flex flex-col items-center mt-2 gap-3 lg:p-0 p-8">
          <h1>Full Stack Developer</h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, staggerChildren: 0.2, delay: 1 }}
            className="flex items-center gap-5"
          >
            {flags.map((item) => (
              <div key={item.id}>
                <img
                  onClick={() => handleChangeLanguage(item.lang)}
                  src={item.flag}
                  alt=""
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, staggerChildren: 0.2, delay: 2 }}
            className="text-center "
          >
            {t("home.body")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, staggerChildren: 0.2, delay: 3 }}
            className="flex items-center gap-4"
          >
            {AccountDetail.map((item) => (
              <a key={item.id} href={item.url} target="_blank">
                <img
                  key={item.img}
                  src={item.img}
                  className="w-12 h-12 cursor-pointer bg-blue-800 rounded-full hover:pt-2 transition-all duration-300"
                />
              </a>
            ))}
          </motion.div>
          <a
            download="cv.pdf"
            target="_blank"
            href="/utkutoygunbektasoglu(CV).pdf"
            className="w-24 h-6 rounded-md bg-blue-500 text-white text-center"
            rel="noopener noreferrer"
          >
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, staggerChildren: 0.2, delay: 3 }}
            >
              CV
            </motion.button>
          </a>
          {tabs === 1 && <WebTecnologies t={t} />}
          {tabs === 2 && <FrontEndTecnologies t={t} />}
          {tabs === 3 && <BackendTechnologies t={t} />}
          {tabs === 4 && <NoSql t={t} />}
          {tabs === 5 && <Sql t={t} />}
          {tabs === 6 && <Storage t={t} />}
          {tabs === 7 && <Orchestration t={t} />}
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  handleChangeLanguage: PropTypes.func,
  t: PropTypes.func.isRequired,
  tabs: PropTypes.number,
  setTabs: PropTypes.func,
};
export default HomePage;
