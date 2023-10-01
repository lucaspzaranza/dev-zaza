import { useContext } from "react"
import { LangContext } from "../../context/LangContext"

export default function LangSwitcher() {
    const lang = useContext(LangContext);

    return (
        <>
            {lang.lang}
        </>
    )
}