import Grid from "@mui/system/Unstable_Grid/Grid";
import { Container } from "react-bootstrap";
import srinu from "./pics/srinu_kesari.png";
import { useState } from "react";
import { useTrail, animated as a } from "react-spring";
import { FadeDiv, BounceDiv } from "./AllStyles";
import Resume from "./Resume";
const config = { mass: 5, tension: 2000, friction: 200 };

const Intro = () => {
  const [toggle, set] = useState(true);
  const trail = useTrail(4, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  const classhandler = ["Hi", "Name", "Tag", "Desc"];
  const text = [
    "Hi, my name is",
    "Srinu Kesari.",
    "I love to play with codes!",
    "I’m a coding enthusiast and problem solver, currently pursuing a Master’s in MACS at Concordia University. I love diving deep into coding challenges!",
  ];

  return (
    <div>
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        rowSpacing={2}
        justifyContent="space-around"
        alignItems="center"
        paddingTop={"5%"}
        color={"#FEFFFF"}
        backgroundColor={"#17252A"}
        flexDirection="row">
        <Grid direction="row" xs={12} sm={12} md={12} lg={12}>
          {trail.map(({ x, height, ...rest }, index) => (
            <a.div
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}>
              <a.div>
                <Grid xs={12} sm={12} md={12} lg={12}>
                  <div className={classhandler[index]}>
                    {index == 1 ? (
                      <FadeDiv position="right" text={text[index]} />
                    ) : (
                      <FadeDiv position="left" text={text[index]} />
                    )}
                  </div>
                </Grid>
              </a.div>
            </a.div>
          ))}
        </Grid>
        <Resume />
      </Grid>
    </div>
  );
};
export default Intro;
