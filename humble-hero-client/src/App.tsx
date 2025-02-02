import { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import {
  Button,
  styleReset,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import HumbleHeroForm from "./component/HumbleHeroForm";
import { Hero } from "./type/Hero";
import HumbleHeroList from "./component/HumbleHeroList";
import { getHumbleHeros } from "./service/HeroService";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

function App() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [showErrorWindow, setShowErrorWindow] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const saveHumbleHeroHandler = (hero: Hero, status: number) => {
    if (status !== 201) {
      setError("Hero trying to be added was invalid.");
      setShowErrorWindow(true);
    } else {
      if(heroes.length > 0) {
        setHeroes((prev) => [...prev, hero]);
      } else {
        setHeroes([hero]);
      }
    }
  };

  const closeErrorWindowHandler = () => {
    setShowErrorWindow(false);
  };

  useEffect(() => {
    const fetchHeroes = async () => {
      await getHumbleHeros()
        .then((result: any) => {
          if (result.status === 500) {
            setError("Unexpected error has occured.");
            setShowErrorWindow(true);
            return;
          }
          //Sometimes the frontend is loaded before the backend, so the returned data is undefined.
          if(result.data === undefined) return;
          setHeroes(result.data);
        })
        .catch((e) => console.log(e));
    };

    fetchHeroes();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen flex-col space-y-4 bg-[#008080]">
        <GlobalStyles />
        <ThemeProvider theme={original}>
          {showErrorWindow && (
            <Window resizable className="window">
              <WindowHeader className="window-title flex justify-between items-center">
                <span>ERROR</span>
                <Button onClick={closeErrorWindowHandler}>X</Button>
              </WindowHeader>
              <WindowContent>
                <p>ERROR: {error}</p>
              </WindowContent>
            </Window>
          )}
          <br />
          <HumbleHeroForm onSaveHumbleHero={saveHumbleHeroHandler} />
          <br />
          <HumbleHeroList humbleHeroList={heroes} />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
