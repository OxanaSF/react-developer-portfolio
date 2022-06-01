import "./App.css";
import { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, useParams } from "react-router-dom";
import { scroller } from "react-scroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const { section } = useParams();

  useEffect(() => {
    console.log(section);
    scroller.scrollTo(section);
  }, [section]);

  return (
    <div className="container">
  
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  );
}

export default App;
