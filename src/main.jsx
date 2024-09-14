import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import i18next from "i18next";
import global_en from "./translations/en/globa.json";
import global_tr from "./translations/tr/globa.json";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "tr",
  resources: {
    en: {
      global: global_en,
    },
    tr: {
      global: global_tr,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
