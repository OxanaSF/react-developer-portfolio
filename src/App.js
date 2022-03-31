import "./App.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, useParams } from "react-router-dom";
import { scroller } from "react-scroll";


function App() {
  const { section } = useParams();

  useEffect(() => {
    scroller.scrollTo(section);
  }, [section]);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
