import { useContext } from "react"
import { LangContext } from "../../context/LangContext"
import LangButton, { ButtonContainer } from "./langButtonStyles";

export default function LangSwitcher() {
    const lang = useContext(LangContext);

    return (
        <ButtonContainer>
            <LangButton onClick={() => lang.setNewLanguage(lang.lang === 'pt'? 'en' : 'pt')}>
                {lang.lang === 'pt' && ('ENG-US') || ('PT-BR')}
            </LangButton>
        </ButtonContainer>
    )
}