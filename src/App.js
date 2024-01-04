import { Container, Fade } from "react-bootstrap";
import Header from "./components/Header";
import Home from "./components/Home";
import "../src/components/All.css";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { Rotate, Slide } from "react-reveal";
export const config = { mass: 5, tension: 2000, friction: 200 };

function App() {
  const [showPage, setShowPage] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 700);
  }, []);
  return (
    <div className="main-div">
      {showPage ? (
        <>
          <Rotate top left>
            <div className="line_design_email">
              <a href="mailto:srinukesari333gmail.com">
                srinukesari333@gmail.com
              </a>
            </div>
          </Rotate>
          <Slide top>
            <div className="line_design_right"></div>
            <div className="line_design_left1"></div>
            <div className="line_design_left2"></div>
            <div className="line_design_left3"></div>
          </Slide>
          <Header />
          <Home />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
