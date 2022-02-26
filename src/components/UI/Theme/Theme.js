import { useState, useLayoutEffect } from "react";

import classes from "./Theme.module.css"


// Usage
const themeLight = {
    "--primary": "#9d26ff",
    "--theme": "#fafafa",
    "--theme-sec": "#1f1f1f",
    "--text-color": "#363636",
    "--text-color-sec": "#dddddd",
    "--backdrop-color": "rgba(6, 4, 7, 0.897)",
    "--dark-shadow": "rgba(95, 95, 95, 0.897)",
};

const themeDark = {
    "--primary": "#9d26ff",
    "--theme": "#1f1f1f",
    "--theme-sec":" #fafafa",
    "--text-color": "#dddddd",
    "--text-color-sec": "#363636",
    "--backdrop-color": "rgba(6, 4, 7, 0.897)",
    "--dark-shadow": "rgba(6, 4, 7, 0.897)",
};

const root = document.querySelector(":root")

// Hook
const useTheme = (theme) => {
  useLayoutEffect(
    () => {
      // Iterate through each value in theme object
      
      for (const key in theme) {
        // Update css variables in document's root element
        root.style.setProperty(`${key}`, theme[key]);
      }
    },
    [theme] // Only call again if theme object reference changes
  );
}

const Theme = () => {
    const [themeState, setThemeState] = useState(themeLight)

    const themeChangeHandler = () => {
      if (themeState === themeLight) {
        setThemeState(themeDark)
      }
      else {
        setThemeState(themeLight)
      }
    }

    useTheme(themeState)  

    return <div className={classes.theme} onClick={themeChangeHandler}>
        <div className={classes["inner-curve"]}>
            <div></div>
        </div>
    </div>
}


export default Theme;