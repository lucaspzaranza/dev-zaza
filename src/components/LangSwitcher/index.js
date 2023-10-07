import { useContext } from "react"
import { LangContext } from "../../context/LangContext"
import LangButton, { ButtonContainer } from "./langButtonStyles";
import language from '../../assets/svg/language.svg'

export default function LangSwitcher() {
    const lang = useContext(LangContext);

    return (
        <ButtonContainer>
            <LangButton onClick={() => lang.setNewLanguage(lang.lang === 'pt'? 'en' : 'pt')}>
                <img src={language} alt="lang"/>
                {lang.lang === 'pt' && ('ENG-US') || ('PT-BR')}
            </LangButton>
        </ButtonContainer>
    )
}