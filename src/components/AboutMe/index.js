import data from "../../data"
import { LangContext } from "../../context/LangContext"
import { useContext } from "react"
import profile from '../../assets/svg/profile-bold.svg'
import date from '../../assets/svg/date.svg'
import email from '../../assets/svg/email.svg'
import pin from '../../assets/svg/pin.svg'
import { DataContainer } from "../../globalStyles";

export default function AboutMe() {
    const {lang} = useContext(LangContext);

    const dateOfBirth = new Date(data[lang].aboutMe.age);
    const today = new Date();
    var yearsOld = today.getFullYear() - dateOfBirth.getFullYear();
    
    if(today.getMonth() <= dateOfBirth.getMonth() && today.getDate() < dateOfBirth.getDate()) {
        yearsOld--;
    }

    return (
        <DataContainer>
            <span><img src={profile}/> {data[lang].aboutMe.name}</span>
            <span><img src={date}/> {yearsOld} {data[lang].aboutMe.yearsOld}</span>
            <span><img src={email}/> {data[lang].aboutMe.email}</span>
            <span><img src={pin}/> {data[lang].aboutMe.city}, {data[lang].aboutMe.state}, {data[lang].aboutMe.country}</span>

            {
                data[lang].aboutMe.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))
            }
        </DataContainer>
    )
}