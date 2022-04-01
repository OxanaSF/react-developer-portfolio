import "./App.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, useParams } from "react-router-dom";
import { scroller } from "react-scroll";
import Navbar from "./components/Navbar";

function App() {
  const { section } = useParams();

  useEffect(() => {
    console.log(section);
    scroller.scrollTo(section);
  }, [section]);

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
