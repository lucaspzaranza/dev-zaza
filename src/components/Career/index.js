import { useContext } from "react";
import data from "../../data";
import { LangContext } from "../../context/LangContext";
import CareerContainer, { JobContainer } from "./careerStyles";
import company from "../../assets/svg/company.svg";
import codeSquare from "../../assets/svg/code-square.svg";

export default function Career() {
  const { lang } = useContext(LangContext);
  const carreers = [...data[lang].careerData].reverse();

  return (
    <CareerContainer>
      {carreers.map((job, jobIndex) => (
        <JobContainer key={jobIndex}>
          <h3>
            <img src={company} /> {job.company} ({job.startDate} - {job.endDate}
            )
          </h3>
          <span>
            <img src={codeSquare} /> {job.techs}
          </span>

          {job.jobDescription.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </JobContainer>
      ))}
    </CareerContainer>
  );
}
