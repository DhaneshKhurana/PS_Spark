import { useState } from "react";
import { DarkModeToggle } from "react-dark-mode-toggle-2";

export const ThemeToggle = ({ onThemeChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const updateTheme = (isDark) => {
    if (isDark) {
      console.log("Dark mode selected");
    } else {
      console.log("Light mode selected");
    }
    onThemeChange(isDark);
    setIsDarkMode(isDark);
  };

  return <DarkModeToggle onChange={updateTheme} isDarkMode={isDarkMode} />;
};
