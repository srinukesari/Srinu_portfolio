import Grid from "@mui/system/Unstable_Grid/Grid";
import srinu from "./pics/srinu_kesari.png";

const Intro = () => {
  return (
    <Grid
      container
      spacing={2}
      rowSpacing={1}
      justifyContent="space-around"
      alignItems="center"
      color={"#FEFFFF"}
      backgroundColor={"#3AAFA9"}
      flexDirection="row"
    >
      <Grid flexDirection="row" sm={12} xs={12} className="Intro">
        <Grid xs={12}>
          <div className="Hi">Hi, my name is</div>
        </Grid>
        <Grid xs={12}>
          <div className="Name"> Srinu Kesari.</div>
        </Grid>
        <Grid xs={12}>
          <div className="Tag">
            <code> I love to play with code!</code>
          </div>
        </Grid>
        <Grid xs={12}>
          <div className="Desc">
            I'm a full stack developer, coding enthusiast and good at problem
            solving!
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Intro;
