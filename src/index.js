import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./globalStyles";
import LangContextWrapper from "./context/LangContext";
import FolderContextWrapper from "./context/FolderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <LangContextWrapper>
        <FolderContextWrapper>
          <App />
        </FolderContextWrapper>
      </LangContextWrapper>
    </GlobalStyles>
  </React.StrictMode>
);
