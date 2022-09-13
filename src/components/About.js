import { Grid } from "@mui/material";
import srinu from "./pics/srinu_kesari.png";

const About = () => {
  return (
    <Grid
      container
      spacing={1}
      rowSpacing={1}
      justifyContent="space-around"
      alignItems="center"
      color={"#3AAFA9"}
      backgroundColor={"#FEFFFF"}
      flexDirection="row"
    >
      <Grid container xs={12} className="About-title">
        1.About Me
      </Grid>
      <Grid container xs={12} flexDirection="row" justifyContent="space-around" alignItems="center">
        <Grid sm={6} xs={6} className="About-desc">
          Hello! My name is srinu and i am fascinated to code, solve problem by
          finding proper logic. My key areas are Data Structures and
          Algorithms(DSA) bcz from my schooling Maths is my favourite which
          turns me to pick computers as my Career!
        </Grid>
        <Grid sm ={6} xs={3} className="image">
          <img src={srinu}  className ="About-pic"/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
