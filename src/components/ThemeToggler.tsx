import { SetStateAction } from "react";

export function ThemeToggler(theme: string, setTheme: React.Dispatch<SetStateAction<string>>) {
    const themeToggler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTheme(e.target.value)
    }
    return (
        <div className="theme-toggler">
        <div className="toggler-fonts">
          THEME
        </div> 
        <div className="margin-2">
         <div className="labels">
          <label htmlFor="theme-1 toggler-fonts">
            <span className="toggler-fonts">1</span>
          </label>
          <label htmlFor="theme-2 toggler-fonts">
            <span className="toggler-fonts">2</span>
          </label>
          <label htmlFor="theme-3 ">
            <span className="toggler-fonts">3</span>
          </label>
         </div>
         <div className="radio-buttons">
          <input type="radio" name="theme" id="theme-1" value="theme-1" onChange={themeToggler} checked={theme === 'theme-1'} />
          <input type="radio" name="theme" id="theme-2" value="theme-2" onChange={themeToggler} checked={theme === 'theme-2'} />
          <input type="radio" name="theme" id="theme-3" value="theme-3" onChange={themeToggler} checked={theme === 'theme-3'} />
         </div>
      </div>
      </div>
    )
}