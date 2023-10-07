import { useState } from "react";
import CollapsibleContainer, { StyledCollapsibleButton, Caret } from './collapsibeStyles'
import folder from '../../assets/svg/folder.svg'

export default function CollapsibleButton({title, component, onClickCallback}) {
    const [showComponent, setShowComponent] = useState(false);

    function showComponentOnClick() {
        setShowComponent(prevState => !prevState);
        onClickCallback(showComponent? 1 : -1);
    }

    return (
        <CollapsibleContainer>
            <StyledCollapsibleButton onClick={showComponentOnClick} clicked={showComponent.toString()}>
                <img src={folder}/>
                <span>
                    C:/{title}/
                    {showComponent && <Caret/>}
                </span>
            </StyledCollapsibleButton>

            <div className={showComponent? 'show' : 'hide'}>
                {showComponent && component}
            </div>
        </CollapsibleContainer>
    )
}