import { useContext } from "react"
import data from "../../data"
import { LangContext } from "../../context/LangContext"
import ProjectContainer from './projectsStyles';

export default function Projects() {
    const {lang} = useContext(LangContext);

    return (
        <>
            {
                data[lang].projectsData.map((project, index) => (
                    <ProjectContainer key={index}>
                        <div className="project-title">
                            <h4>{project.name}</h4>
                            <h5>{project.techs}</h5>
                        </div>

                        {
                            project.img.length > 0 &&
                            <img src={project.img} style={{width: project.imgWidth}}/>
                        }

                        {
                            project.description.map((paragraph, pIndex) => (
                                <p key={pIndex}>
                                    {paragraph}
                                </p>
                            ))
                        }

                        <div className="project-links">
                            {project.link.length > 0 && <a href={project.link} target="_blank">Link</a>}
                            {project.github.length > 0 && <a href={project.github} target="_blank">Github</a>}
                        </div>
                    </ProjectContainer>
                ))
            }
        </>
    )
}