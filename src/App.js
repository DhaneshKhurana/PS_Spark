import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import "rsuite/dist/rsuite.min.css";
import { Sidebars } from "./components/sidebars/SideBars";
import { LeftSidebar } from "./components/sidebars/LeftSideBar";
import { RightSidebar } from "./components/sidebars/RightSideBar";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="mainContainer">
        <LeftSidebar />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
