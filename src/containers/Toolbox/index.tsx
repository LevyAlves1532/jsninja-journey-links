// HOOKs
import { useTranslate } from "../../core/hooks/useTranslate";

// TYPEs
import { ModeType, LanguageType } from "../../types/AppType"; 

// ICONs
import { FaSun, FaMoon } from "react-icons/fa";

// STYLEs
import { ContainerToolbox } from "./styles";

interface IToolboxProps {
  mode: ModeType;
  language: LanguageType;
  is: boolean;
  onMode: () => void;
  onToggle: () => void;
  onMouseLeave: () => void;
  onLanguage: (lang: LanguageType) => void;
}

export function Toolbox({ 
  mode, 
  language, 
  is, 
  onMode, 
  onToggle, 
  onMouseLeave, 
  onLanguage 
}: IToolboxProps) {
  const [ get ] = useTranslate();

  let toolboxButtonListClass = "Toolbox__button--list";

  if (is) toolboxButtonListClass += " active-list";

  const changeLanguage = (name: LanguageType) => {
    onLanguage(name);
    onMouseLeave();
  }

  return (
    <ContainerToolbox>
      <div className="Toolbox">
        <div className="Toolbox__button" onMouseLeave={onMouseLeave}>
          <button onClick={onToggle}>
            <p>{get("languagesTitle")}</p>
          </button>

          <div className={toolboxButtonListClass}>
            { 
              get("languages").map((el: { name: LanguageType; label: string; }, index: number) => (
                <button 
                  className={language === el.name ? "active-language" : ""} 
                  onClick={() => changeLanguage(el.name)}
                  key={index}
                >
                  <span>{el.label}</span>
                </button>
              ))
            }
          </div>
        </div>

        <div className="Toolbox__button">
          <button onClick={onMode}>
            { mode === "dark" ? <FaSun /> : <FaMoon /> }
          </button>
        </div>
      </div>
    </ContainerToolbox>
  );
}
