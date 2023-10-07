import { useContext } from "react";
import data from "../../data";
import EducationContainer from "./educationStyles";
import { LangContext } from "../../context/LangContext";
import education from '../../assets/svg/education.svg'
import binary from '../../assets/svg/binary.svg'

export default function Education() {
    const {lang} = useContext(LangContext);
    
    return(
        <EducationContainer>
            <span><img src={education}/> {data[lang].educationData.university}</span>
            <span><img src={binary}/> {data[lang].educationData.course}</span>
        </EducationContainer>
    )
}