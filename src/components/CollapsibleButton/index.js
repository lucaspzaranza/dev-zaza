import { useState } from "react";
import CollapsibleContainer, { StyledCollapsibleButton } from './collapsibeStyles'

export default function CollapsibleButton({title, component, onClickCallback}) {
    const [showComponent, setShowComponent] = useState(false);

    function showComponentOnClick() {
        setShowComponent(prevState => !prevState);
        onClickCallback(showComponent? 1 : -1);
    }

    return (
        <CollapsibleContainer>
            <StyledCollapsibleButton onClick={showComponentOnClick}>
            {title}
            </StyledCollapsibleButton>

            <div className={showComponent? 'show' : 'hide'}>
                {showComponent && component}
                {/* {component} */}
            </div>
        </CollapsibleContainer>
    )
}