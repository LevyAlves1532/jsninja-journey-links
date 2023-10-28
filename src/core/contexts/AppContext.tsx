// LIBs
import React, { useEffect, createContext, useState, useContext } from "react";
import { ThemeProvider } from "styled-components"; 

// STYLESHEETs
import { colors, screens } from "../stylesheets";

// UTILs
import { getCookieMode, setCookieMode, getCookieLanguage, setCookieLanguage } from "../utils/Cookies"; 

// TYPEs
import { ModeType, LanguageType, ScreenType } from "../../types/AppType";

interface IAppContextType {
  language: LanguageType;
  mode: ModeType;
  screen: ScreenType;
  scrollTop: number;
  changeLanguage: (lang: LanguageType) => void;
  toggleMode: () => void;
}

const AppContext = createContext({} as IAppContextType);

export function useAppContext() {
  return useContext(AppContext);
}

interface IAppContextProviderProps {
  children: React.ReactNode;
}

const initialScreen: ScreenType = {
  width: 0,
  heigth: 0,
};

export function AppContextProvider({ children }: IAppContextProviderProps) {
  const [ language, setLanguage ] = useState<LanguageType>(getCookieLanguage());
  const [ mode, setMode ] = useState<ModeType>(getCookieMode());
  const [ scrollTop, setScrollTop ] = useState<number>(0);
  const [ screen, setScreen ] = useState<ScreenType>(initialScreen);

  useEffect(() => {
    resize();

    window.onscroll = scroll;
    window.onresize = resize;
  }, [])

  const changeLanguage = (lang: LanguageType) => {
    setLanguage(lang);
    setCookieLanguage(lang);
  }

  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    setCookieMode(newMode);
  }

  const scroll = () => {
    setScrollTop(window.scrollY);
  }

  const resize = () => {
    const newScreen = { ...screen };
    newScreen.width = window.screen.width;
    newScreen.heigth = window.screen.height;
    setScreen(newScreen);
  }

  return (
    <AppContext.Provider value={{ language, mode, scrollTop, screen, changeLanguage, toggleMode }}>
      <ThemeProvider theme={{ ...colors[mode], ...screens }}>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}
