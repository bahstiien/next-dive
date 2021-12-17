import { useEffect, useState } from "react";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";

const DarkMode = () => {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };
  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);
  return (
    <div className="flex justify-center text-center">
      <FormGroup>
        <p className="mr-5 text-2xl -mt-4">🌙</p>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label=""
          labelPlacement="end"
          color="primary"
          checked={darkTheme}
          onChange={handleToggle}
        />
      </FormGroup>
    </div>
  );
};

export default DarkMode;
