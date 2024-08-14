import { Grid } from "@mui/material";
import srinu from "./pics/srinu_kesari.png";
import Fade from "react-reveal/Fade";
import { Bounce, Rotate, LightSpeed } from "react-reveal";
import { BounceDiv, ZoomDiv, LightSpeedDiv } from "./AllStyles";

const About = () => {
  return (
    <div id="about">
      <Grid
        container
        paddingTop={"8%"}
        paddingBottom={"3%"}
        justifyContent="flex-end"
        alignItems="flex-end"
        color={"#FEFFFF"}
        backgroundColor={"#17252A"}
        Direction="col">
        <Grid xs={12} sm={12} md={12} lg={12}>
          <p className="section_title">
            <LightSpeedDiv position="right" text="Knock, Knock!" />
          </p>
        </Grid>
        <Grid container xs={12} Direction="row" alignItems={"flex-start"}>
          <Grid xs={12} sm={12} md={7} lg={8}>
            <p className="About-desc">
              <LightSpeedDiv
                position="left"
                text="
            Hello! My name is Srinu, and I have a deep passion for coding and problem-solving. I enjoy developing efficient solutions by finding the right logic. My key strengths lie in Data Structures and Algorithms (DSA), a natural progression from my love for math, which has been my favorite subject since school and inspired me to pursue a career in computer science."
              />
              <br />
              <br />
              <LightSpeedDiv
                position="left"
                text="
              Jump start to present, pursuing my Master’s in Applied Computer Science 
              at Concordia University, Montreal, Quebec."
              />
            </p>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={5}
            lg={4}
            justifyContent="flex-end"
            alignItems="flex-end">
            <Fade right>
              <center>
                <figure className="wave">
                  <img src={srinu} />
                </figure>
              </center>
            </Fade>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
