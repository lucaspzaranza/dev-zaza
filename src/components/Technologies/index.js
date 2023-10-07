import { techs } from "../../data"
import { TechContainer, TechButton } from './techsStyles'

export default function Technologies() {
    return (
        <TechContainer>
            {
                techs.map((tech, index) => (
                    <TechButton key={index} tech={tech}/>
                ))
            }
        </TechContainer>
    )
}