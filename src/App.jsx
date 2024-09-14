import { useState } from "react";
import Cursor from "./components/cursor/Cursor";
import Header from "./components/header/Header";
import StarryBackground from "./components/starBackground/StarryBackground ";
import HomePage from "./pages/HomePage";
import { useTranslation } from "react-i18next";

const App = () => {
  const [t, i18n] = useTranslation("global");
  const [tabs, setTabs] = useState(1);
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
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
