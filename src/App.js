import { MainPage } from "./components/main-page";
import { ThemeContext} from "./contexts/ThemeContext";

function App() {
  return (
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <MainPage theme={theme} setTheme={setTheme}/>
        )}
    </ThemeContext.Consumer>   

  );
}

export default App;
