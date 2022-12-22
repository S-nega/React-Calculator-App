import { Calculator } from "../calculator";
import { Info } from "../info";

export const MainPage = ({ theme, setTheme }) => {
  return (
    <div className="mainPage">
        <Info theme={theme} setTheme={setTheme}/>
        <Calculator/>
    </div>
  );
};