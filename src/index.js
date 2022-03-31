import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import Blog from "./components/Blog";
import { webDevProjects } from "./components/data";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App webDevProjects={webDevProjects} />}>
        <Route index element={<MainPage webDevProjects={webDevProjects} />} />
        <Route
          path=":section"
          element={<MainPage webDevProjects={webDevProjects} />}
        />
        <Route path="blog" element={<Blog />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
