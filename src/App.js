import { Suspense } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import "./App.css";

const traslationsRu = {
  title: "Понятно об искусственном интеллекте (ИИ)",
  container: "Если упростить, искусственный интеллект (ИИ) — это система или машина, которые могут имитировать человеческое поведение, чтобы выполнять задачи, и постепенно обучаться, используя собираемую информацию."
}

const translationsEn = {
  title: "Awareness of artificial intelligence (AI)",
  container: "Simply put, artificial intelligence (AI) is a system or machine that can mimic human behavior in order to perform tasks and gradually learn from the information it gathers.",

};

const translationsFr = {
  title: "Comprendre l'intelligence artificielle (IA)",
  container: "En termes simples, l'intelligence artificielle (IA) est un système ou une machine qui peut imiter le comportement humain afin d'accomplir des tâches et d'apprendre progressivement à partir des informations qu'elle a collectées.",
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: traslationsRu },
      en: { translation: translationsEn },
      fr: { translation: translationsFr },
    },
    lng: "ru",
    fallbackLng: "ru",
    interpolation: { escapeValue: false },
  });

const App = () => {
  const { t } = useTranslation();

  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <div className="App__container">
          <h1>{t("title")}</h1>
          <p>
            {t('container')}
          </p>
          <select name="language" onChange={onChange}>
            <option value="ru">Russian</option>
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
        </div>
      </div>
    </Suspense>
  );
};

export default App;
