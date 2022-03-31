import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Blog from "./components/Blog";

const webDevProjects = [
  {
    title: "Project A",
    imgSrc: `${process.env.PUBLIC_URL}/images/image1_ocean.jpg`,
    url: "Icon Link",
    githubLink: "Github",
  },
  {
    title: "Project B",
    imgSrc: `${process.env.PUBLIC_URL}/images/image2_fire.jpg`,
    url: "Icon Link",
    githubLink: "Github",
  },
  {
    title: "Project C",
    imgSrc: `${process.env.PUBLIC_URL}/images/image3_leaves.jpg`,
    url: "Icon Link",
    githubLink: "Github",
  },
  {
    title: "Project D",
    imgSrc: `${process.env.PUBLIC_URL}/images/image4_purple.jpg`,
    url: "Icon Link",
    githubLink: "Github",
  },
  {
    title: "Project E",
    imgSrc: `${process.env.PUBLIC_URL}/images/image5_green.jpg`,
    url: "Icon Link",
    githubLink: "Github",
  },
  {
    title: "Project E",
    imgSrc: `${process.env.PUBLIC_URL}/images/image6_orange.jpg`,
    url: "Icon Link",
    githubLink: "Github",
  },
];

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<MainPage webDevProjects={webDevProjects} />}
        />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
