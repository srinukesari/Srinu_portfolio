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
            Hello! My name is srinu and i am fascinated to code, solve problem
            by finding proper logic. My key areas are Data Structures and
            Algorithms(DSA) bcz from my schooling, Maths is my favourite which
            turns me to pick computers as my Career!"
              />
              <br />
              <br />
              <LightSpeedDiv
                position="left"
                text="
              Jump start to present, and I am currently working in a fast-paced
              startup and I focus on the core functionalities of product like Revo
              Policy Engine, 1:1 calls, Authentication & Authorization and
              Advertising engine etc.,"
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
