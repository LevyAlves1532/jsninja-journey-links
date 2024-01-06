// LIBs
import { useState } from "react";

// ASSETs
import logo from "./assets/logo.png";

// COMPONENTs
import { ButtonLink } from "./components";

// CONTAINERs
import { Toolbox } from "./containers";

// CONTEXTs
import { useAppContext } from "./core/contexts";

// HOOKs
import { useTranslate } from "./core/hooks/useTranslate";

// STYLEs
import { WrapperApp } from "./styles";

export function App() {
  const { mode, language, toggleMode, changeLanguage } = useAppContext();

  const [ get ] = useTranslate();

  const [ isLanguage, setIsLanguage ] = useState<boolean>(false);

  return (
    <WrapperApp>
      <div className="Container">
        <div className="Container__image">
          <img src={logo} width={200} alt={get("altLogo")} />
        </div>

        <div className="Container__title">
          <h1>🚀 - Alves<span>codin</span> - 🚀</h1>
        </div>

        <div className="Container__text">
          <p dangerouslySetInnerHTML={{ __html: get("text") }} />
        </div>

        <div className="Container__links">
          <ButtonLink label="Portifolio" to="https://www.jsninjajourney.com.br/" />
          <ButtonLink label="LinkedIn" to="https://www.linkedin.com/in/l%C3%AAvy-alves-968477224/" />
        </div>

        <div className="Container__footer">
          <p>{get("developmentText")}: <a href="https://www.instagram.com/alvescodin/">Lêvy P. Alves</a></p>
        </div>
      </div>

      <Toolbox 
        mode={mode} 
        language={language} 
        is={isLanguage}
        onMode={toggleMode} 
        onToggle={() => setIsLanguage(!isLanguage)}
        onMouseLeave={() => setIsLanguage(false)}
        onLanguage={changeLanguage}
      />
    </WrapperApp>
  );
}