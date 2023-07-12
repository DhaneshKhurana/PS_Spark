import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import { LeftSidebar } from "./sidebars/LeftSideBar";
import { RightSidebar } from "./sidebars/RightSideBar";
import { useState } from "react";
import { CustomProvider } from "rsuite";

const Main = () => {
  const [theme, setTheme] = useState("light");

  const updateTheme = (isDark) => {
    console.log("Main:: called with dark mode", isDark);
    if (isDark) {
      console.log("Dark mode selected");
      setTheme("dark");
    } else {
      console.log("Light mode selected");
      setTheme("light");
    }
  };
  return (
    <div>
      <div>
        <Header onThemeChange={updateTheme} />
      </div>
      <div className="mainContainer">
        <CustomProvider theme={theme}>
          <LeftSidebar />
          <Outlet />
          <RightSidebar />
        </CustomProvider>
      </div>
    </div>
  );
};

export default Main;
