import { useContext, useEffect, useState } from "react";
import CollapsibleContainer, {
  StyledCollapsibleButton,
  Caret,
} from "./collapsibeStyles";
import folder from "../../assets/svg/folder.svg";
import { FolderContext } from "../../context/FolderContext";

export default function CollapsibleButton({
  title,
  component,
  onClickCallback,
  name,
}) {
  const [showComponent, setShowComponent] = useState(false);
  const { foldersOpenData, setFoldersOpenData } = useContext(FolderContext);

  function showComponentOnClick() {
    onClickCallback(showComponent ? 1 : -1);

    const array = [
      ...foldersOpenData.map((folder) => {
        return {
          ...folder,
          isOpen: folder.folderName === name && !folder.isOpen,
        };
      }),
    ];
    setFoldersOpenData([...array]);
  }

  useEffect(() => {
    const currentFolder = foldersOpenData.find(
      (folder) => folder.folderName === name
    );

    setShowComponent(currentFolder?.isOpen ?? false);
  }, [foldersOpenData]);

  return (
    <CollapsibleContainer>
      <StyledCollapsibleButton
        onClick={showComponentOnClick}
        clicked={showComponent.toString()}
      >
        <img src={folder} />
        <span>
          C:/{title}/{showComponent && <Caret />}
        </span>
      </StyledCollapsibleButton>

      <div className={showComponent ? "show" : "hide"}>
        {showComponent && component}
      </div>
    </CollapsibleContainer>
  );
}
