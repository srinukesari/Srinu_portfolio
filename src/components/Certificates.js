import { Grid, Zoom } from "@mui/material";
import CarouselSlider from "react-carousel-slider";
import "./All.css";
import virtusa_win from "./Certificates/Virtusa_winning.jpg";
import winners from "./Certificates/Winners_list.jpg";
import infy from "./Certificates/Infytq.jpeg";
import MLAI_exel from "./Certificates/MLAI_Exel.jpg";
import MLAI_intern from "./Certificates/MLAI_intern.jpg";
import HR_PS_I from "./Certificates/HR_ps_i.png";
import HR_react_b from "./Certificates/HR_react_b.png";
import HR_SQL_I from "./Certificates/HR_sql_i.png";

const Certificates = () => {
  let data = [
    {
      des: "1",
      imgSrc: infy,
    },
    {
      des: "2",
      imgSrc: virtusa_win,
    },
    {
      des: "3",
      imgSrc: winners,
    },
    {
      des: "4",
      imgSrc: MLAI_intern,
    },
    {
      des: "5",
      imgSrc: MLAI_exel,
    },
    {
      des: "6",
      imgSrc: HR_react_b,
    },
    {
      des: "7",
      imgSrc: HR_SQL_I,
    },
    {
      des: "8",
      imgSrc: HR_PS_I,
    },
  ];
  let manner = {
    autoSliding: { interval: "4s" },
    duration: "0.3s",
  };
  let buttonSetting = {
    placeOn: "middle-inside",
    hoverEvent: true,
    style: {
      left: {
        background: "transparent",
        margin: "0px 0px 0px 0px",
        color: "#66FCF1",
        fontSize: "50px",
      },
      right: {
        background: "transparent",
        color: "#66FCF1",
        margin: "0px 0px 0px 0px",
        fontSize: "50px",
      },
    },
  };
  let sliderBoxStyle = { background: "transparent" };

  let textBoxStyle = {
    textAlign: "end",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    color: "#17252A",
    background: "transparent",
    fontSize: "20px",
    fontWeight: 600,
  };
  let itemsStyle = {
    opacity: 1,
    hoverEvent: "true",
    style: {
      opacity: 3,
    },
  };

  let dotsetting = {
    style: {
      currDotSize: "17px",
      currDotColor: "#66FCF1",
    },
  };

  return (
    <div id="testimonials">
      <Grid container xs={12} sm={12} md={12} lg={12}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <p className="section_title">
            {"Triumphs and testimonials in my bucket are..."}
          </p>
        </Grid>

        <Grid container padding={"40px 60px"}>
          <CarouselSlider
            slideItems={data}
            manner={manner}
            buttonSetting={buttonSetting}
            sliderBoxStyle={sliderBoxStyle}
            itemsStyle={itemsStyle}
            textBoxStyle={textBoxStyle}
            dotsSetting={dotsetting}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Certificates;
