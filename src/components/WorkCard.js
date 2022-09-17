import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
}));

export default function WorkCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: expanded ? 445 : 345,
        margin: "30px 10px",
      }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#3AAFA9" }} aria-label="recipe">
            {props.company[0]}
          </Avatar>
        }
        sx={{ fontSize: 1100, fontWeight: "bolder" }}
        title={<span className="company-title">{props.company}</span>}
        subheader={props.period}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          <span className="job-title">{props.title}</span>
        </Typography>
        <CardMedia
          component="img"
          height="194"
          className="company-logo"
          image={props.logo}
          alt="Logo"
        />
        <span className="tech-area">
          <Typography variant="body2" color="text.secondary">
            {props.tech.map((stack) => (
              <span className="tech-stack">{stack}</span>
            ))}
          </Typography>
          <CardActions disableSpacing>
            <ExpandMore
              className="expand-icon"
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more">
              <ExpandMoreIcon className="expand-icon" />
            </ExpandMore>
          </CardActions>
        </span>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tasks:</Typography>
          {props.tasks.map((task) => (
            <Typography paragraph>
              {"- "}
              {task}
            </Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
