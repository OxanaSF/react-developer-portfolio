import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
