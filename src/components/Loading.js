import { Fade, Zoom } from "react-reveal";
import "./All.css";
import Flash from "react-reveal/Flash";
const Loading = () => {
  return (
    <Flash>
      <div className="load">
        <span className="logo-s">S</span>
        <span className="logo-k">K</span>
      </div>
    </Flash>
  );
};

export default Loading;
