import React from "react";
import { Fade, Bounce, Zoom, Rotate, LightSpeed } from "react-reveal";

export const BounceDiv = (props) => {
  if (props.position == "right") return <Bounce right>{props.text}</Bounce>;
  else return <Bounce left>{props.text}</Bounce>;
};

export const FadeDiv = (props) => {
  if (props.position == "right") return <Fade right>{props.text}</Fade>;
  else return <Fade left>{props.text}</Fade>;
};

export const ZoomDiv = (props) => {
  if (props.position == "right") return <Zoom right>{props.text}</Zoom>;
  else if (props.position == "left") return <Zoom left>{props.text}</Zoom>;
  else return <Zoom>{props.text}</Zoom>;
};

export const RotateDiv = (props) => {
  if (props.position == "right") return <Rotate right>{props.text}</Rotate>;
  else return <Rotate left>{props.text}</Rotate>;
};

export const LightSpeedDiv = (props) => {
  if (props.position == "right")
    return <LightSpeed right>{props.text}</LightSpeed>;
  else return <LightSpeed left>{props.text}</LightSpeed>;
};
