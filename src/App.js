import { useContext, useState } from "react";
import { LangContext } from "./context/LangContext";
import data from "./data";
import { Header, TitleDiv, MenuDiv } from "./globalStyles";
import LangSwitcher from "./components/LangSwitcher";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import CollapsibleButton from "./components/CollapsibleButton";
import Technologies from "./components/Technologies";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Links from "./components/Links";

function App() {
  const { lang } = useContext(LangContext);
  const [menuOpenCount, setMenuOpenCount] = useState(0);

  function setMenuCountCallback(value) {
    setMenuOpenCount((prevState) => prevState + value);
  }

  return (
    <>
      <Header>
        <TitleDiv>
          <h1>{data[lang].title}</h1>
          <LangSwitcher />
        </TitleDiv>

        <h3>{data[lang].subtitle}</h3>
      </Header>

      <MenuDiv $menuOpenCount={menuOpenCount}>
        <CollapsibleButton
          onClickCallback={setMenuCountCallback}
          title={data[lang].about}
          component={<AboutMe />}
          name="about"
        />
        <CollapsibleButton
          onClickCallback={setMenuCountCallback}
          title={data[lang].education}
          component={<Education />}
          name="education"
        />
        <CollapsibleButton
          onClickCallback={setMenuCountCallback}
          title={data[lang].techs}
          component={<Technologies />}
          name="technologies"
        />
        <CollapsibleButton
          onClickCallback={setMenuCountCallback}
          title={data[lang].career}
          component={<Career />}
          name="career"
        />
        <CollapsibleButton
          onClickCallback={setMenuCountCallback}
          title={data[lang].projects}
          component={<Projects />}
          name="projects"
        />
        <CollapsibleButton
          onClickCallback={setMenuCountCallback}
          title={data[lang].links}
          component={<Links />}
          name="links"
        />
      </MenuDiv>
    </>
  );
}

export default App;
