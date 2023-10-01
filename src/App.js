import { useContext } from "react";
import { LangContext } from "./context/LangContext";
import data from "./data";
import { Header } from "./globalStyles";
import LangSwitcher from "./components/LangSwitcher";

function App() {
  const {lang} = useContext(LangContext);

  return (
    <>
      <Header>
        <h1>{data[lang].title}</h1>
        <h3>{data[lang].subtitle}</h3>
        <LangSwitcher/>
      </Header>
      <>
          <p>
            asdasd
          </p>
      </>
    </>
  );
}

export default App;
