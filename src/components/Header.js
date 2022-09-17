import React, { Component, useState, useEffect } from "react";
import "./All.css";
import logo from "./pics/logo.jpeg";
import { Grid } from "@mui/material";
import { Button } from "react-bootstrap";
import { Rotate, Fade, LightSpeed, Slide } from "react-reveal";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openMenu, setOpenMenu] = useState(false);
  document.onmousemove = mousePosition;
  function mousePosition() {
    let e = window.event;
    let posY = e.clientY;

    if (posY < 10) {
      document.getElementById("header").style.top = "0";
    }
  }
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  };

  function closeSideMenu() {
    setOpenMenu(false);
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (openMenu) document.getElementById("homediv").style.filter = "blur(5px)";
    else document.getElementById("homediv").style.filter = "blur(0px)";
  }, [openMenu]);

  useEffect(() => {
    if (windowWidth > 900) {
      setOpenMenu(false);
    }
  }, [windowWidth]);

  const headerList = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Tech",
      link: "#skills",
    },
    {
      name: "Experience",
      link: "#work",
    },
    {
      name: "Draft",
      link: "#project",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "Connect",
      link: "#contact",
    },
  ];
  return (
    <div id="header">
      {openMenu && (
        <Slide right>
          <div className="smallMenu">
            <Grid
              container
              direction="column"
              justifyContent="center"
              height="100%"
              alignItems="center"
              xs={2}
              md={3}>
              {headerList.map((item) => (
                <Grid item padding="10px 20px" xs={1} md={1}>
                  <center>
                    <a href={item.link} onClick={closeSideMenu}>
                      <b>{item.name}</b>
                    </a>
                  </center>
                </Grid>
              ))}
            </Grid>
          </div>
        </Slide>
      )}
      <Grid
        container
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}>
        <Grid item xs={4} sm={4} md={2} lg={2} paddingTop="20px">
          <div className="header-logo">
            <a href="/">
              <span className="s-logo">S</span>
              <span className="k-logo">K</span>
            </a>
          </div>
        </Grid>
        {windowWidth < 900 ? (
          <Grid
            container
            xs={3}
            sm={3}
            md={10}
            lg={10}
            direction="column"
            alignItems="center"
            justifyContent="center"
            paddingLeft={"5%"}
            paddingTop={"2%"}>
            <Grid item>
              {openMenu ? (
                <Rotate>
                  <button
                    onClick={() => {
                      setOpenMenu(false);
                    }}>
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 460.775 460.775"
                      fill="#66FCF1"
                      space="preserve">
                      <path
                        d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
                      />
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </button>
                </Rotate>
              ) : (
                <LightSpeed right>
                  <button
                    onClick={() => {
                      setOpenMenu(true);
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="#66FCF1">
                      <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
                    </svg>
                  </button>
                </LightSpeed>
              )}
            </Grid>
          </Grid>
        ) : (
          <Grid
            item
            xs={0}
            sm={0}
            md={10}
            lg={10}
            paddingRight={"5%"}
            paddingTop={"2%"}>
            <ul className="header-ul">
              {headerList.reverse().map((item) => (
                <li className="header-li">
                  <a href={item.link}>
                    <b>{item.name}</b>
                  </a>
                </li>
              ))}
            </ul>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Header;
