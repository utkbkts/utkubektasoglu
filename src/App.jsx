import { useEffect, useState } from "react";
import Cursor from "./components/cursor/Cursor";
import Header from "./components/header/Header";
import StarryBackground from "./components/starBackground/StarryBackground ";
import HomePage from "./pages/HomePage";
import { useTranslation } from "react-i18next";
import Loader from "./components/loading/Loader";

const App = () => {
  const [t, i18n] = useTranslation("global");
  const [tabs, setTabs] = useState(1);
  const [loading, setLoading] = useState(true);
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <div>
      <Header t={t} tabs={tabs} setTabs={setTabs} />
      <StarryBackground />
      <HomePage
        handleChangeLanguage={handleChangeLanguage}
        t={t}
        tabs={tabs}
        setTabs={setTabs}
      />
      <Cursor />
    </div>
  );
};

export default App;
