// CONTEXTs
import { useAppContext } from "../contexts";

// LANGUAGEs
import { ptBR, enUS } from "../languages";

// TYPEs
import { LanguageDataType } from "../../types/LanguageDataType";

const languages = {
  "pt-BR": ptBR,
  "en-US": enUS,
};

export function useTranslate() {
  const { language } = useAppContext();
  const languageData = languages[language];

  const get = (name: string) => {
    const value = languageData[name];

    if (value) {
      return value;
    } else {
      return name;
    }
  }

  return [get];
}
