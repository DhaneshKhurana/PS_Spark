import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import { LeftSidebar } from "./sidebars/LeftSideBar";
import { RightSidebar } from "./sidebars/RightSideBar";
import { PostGrid } from "./blogPost/PostGrid";
import { getPosts } from "../data/PostController";

const Main = () => {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="mainContainer">
        <LeftSidebar />
        <Outlet />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Main;
