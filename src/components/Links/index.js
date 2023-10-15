import data from "../../data"
import LinksContainer from './linksStyles'
import www from '../../assets/svg/www.svg'

export default function Links() {
    return (
        <LinksContainer>
           {data.links.map((linkData, index) => (
            <p key={index}>
                <img src={www}/>
                <a href={linkData.link} target="_blank">{linkData.name}</a>
            </p>
           ))}
        </LinksContainer>
    )
}