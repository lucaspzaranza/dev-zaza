import { useContext, useState } from "react";
import { LangContext } from "./context/LangContext";
import data from "./data";
import { Header, TitleDiv, MenuDiv } from "./globalStyles";
import LangSwitcher from "./components/LangSwitcher";
import AboutMe from "./components/AboutMe";
import CollapsibleButton from "./components/CollapsibleButton";

function App() {
  const {lang} = useContext(LangContext);
  const [menuOpenCount, setMenuOpenCount] = useState(0);

  function setMenuCountCallback(value) {
    setMenuOpenCount(prevState => prevState + value);
  }

  return (
    <>
      <Header>
        <TitleDiv>
          <h1>{data[lang].title}</h1>
          <LangSwitcher/>
        </TitleDiv>

        <h3>{data[lang].subtitle}</h3>
      </Header>

      <MenuDiv $menuOpenCount={menuOpenCount}>
          <CollapsibleButton onClickCallback={setMenuCountCallback} title={data[lang].about} component={<AboutMe/>}/>
          <CollapsibleButton onClickCallback={setMenuCountCallback} title={data[lang].education} component={<AboutMe/>}/>
          <CollapsibleButton onClickCallback={setMenuCountCallback} title={data[lang].techs} component={<AboutMe/>}/>
          <CollapsibleButton onClickCallback={setMenuCountCallback} title={data[lang].career} component={<AboutMe/>}/>
          <CollapsibleButton onClickCallback={setMenuCountCallback} title={data[lang].projects} component={<AboutMe/>}/>
          <CollapsibleButton onClickCallback={setMenuCountCallback} title={data[lang].links} component={<AboutMe/>}/>
      </MenuDiv>
    </>
  );
}

export default App;
