import React from "react";
import { LeftSidebar } from "./LeftSideBar";
import { RightSidebar } from "./RightSideBar";

export const Sidebars = () => {
  return (
    <div className="container">
      <div>
        <LeftSidebar />
      </div>
      <div className="right-sidebar">
        <RightSidebar />
      </div>
    </div>
  );
};
