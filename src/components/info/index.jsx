import { themes} from "../../contexts/ThemeContext";

export const Info = ({ theme, setTheme }) => {
    return (
      <div className="info">
          <div style={{fontSize: '20px'}}>
            <b>calc</b>
          </div>
        <div className="theme-block">
              <div className="theme">
                THEME 
              </div>            
            <div>
              <div className="theme-numbers">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
              </div>
              <div className="radio-block">
                <div className="radio-element"
                  onClick={() => {
                    if (theme === themes.default) setTheme(themes.light)
                    if (theme === themes.light) setTheme(themes.dark)
                    if (theme === themes.dark) setTheme(themes.default)
                  }}
                  >
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  };