import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

const STORAGE_KEY = "portfolio-lang";

function getInitialLanguage(): "fr" | "en" {
	const stored = window.localStorage.getItem(STORAGE_KEY);
	if (stored === "fr" || stored === "en") return stored;
	return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}

i18n.use(initReactI18next).init({
	resources: {
		fr: { translation: fr },
		en: { translation: en },
	},
	lng: getInitialLanguage(),
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
});

i18n.on("languageChanged", (lng) => {
	window.localStorage.setItem(STORAGE_KEY, lng);
	document.documentElement.lang = lng;
});

document.documentElement.lang = i18n.language;

export default i18n;
