import React from "react";
import "./App.css";
import "rsuite/dist/rsuite.min.css";
import { PostGrid } from "./components/blogPost/PostGrid";
import { getPosts } from "./data/PostController";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import { DetailedPost } from "./components/blogPost/DetailedPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/posts" element={<PostGrid posts={getPosts()} />} />
          <Route path="/posts/:postId" element={<DetailedPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
