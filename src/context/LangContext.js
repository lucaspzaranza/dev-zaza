import { createContext, useState } from "react";

export const LangContext = createContext('pt');

export default function LangContextWrapper(props) {
    const [lang, setLang] = useState('pt');

    function setNewLanguage(newLang){
        setLang(newLang);
    }

    return (
        <LangContext.Provider value={{lang, setNewLanguage}}>
            {props.children}
        </LangContext.Provider>
    )
}