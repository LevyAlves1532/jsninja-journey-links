// LIBs
import jsCookie from "js-cookie";

// TYPEs
import { ModeType, LanguageType } from "../../types/AppType";

const cookieModeName = "@jsninjajourneylinks:mode";
const cookieLanguageName = "@jsninjajourneylinks:language"

export const getCookieMode = (): ModeType => 
  jsCookie.get(cookieModeName) as ModeType | undefined || "dark";
export const setCookieMode = (mode: ModeType) => 
  jsCookie.set(cookieModeName, mode, { expires: 7 });
  
export const getCookieLanguage = (): LanguageType => 
  jsCookie.get(cookieLanguageName) as LanguageType | undefined || "pt-BR";
export const setCookieLanguage = (lang: LanguageType) => 
  jsCookie.set(cookieLanguageName, lang, { expires: 7 });
  