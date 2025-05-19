import { createContext, useState } from "react";

export const FolderContext = createContext([
  { folderName: "about", isOpen: false },
  { folderName: "education", isOpen: false },
  { folderName: "technologies", isOpen: false },
  { folderName: "career", isOpen: false },
  { folderName: "projects", isOpen: false },
  { folderName: "links", isOpen: false },
]);

export default function FolderContextWrapper(props) {
  const [foldersOpenData, setFoldersOpenData] = useState([
    { folderName: "about", isOpen: false },
    { folderName: "education", isOpen: false },
    { folderName: "technologies", isOpen: false },
    { folderName: "career", isOpen: false },
    { folderName: "projects", isOpen: false },
    { folderName: "links", isOpen: false },
  ]);

  return (
    <FolderContext.Provider value={{ foldersOpenData, setFoldersOpenData }}>
      {props.children}
    </FolderContext.Provider>
  );
}
