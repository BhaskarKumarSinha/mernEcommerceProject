import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@mui/icons-material/Instagram";
import bhaskar3 from "../../../images/bhaskar3.jpg";
const About = () => {
  const visitInstagram = () => {
    window.location = "http://instagram.com/i__bhaskar.kumar";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={bhaskar3}
              alt="Founder"
            />
            <Typography>Bhaskar Kumar Sinha</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @bhaskarkumarsinha. Only with the
              purpose of improving our skill
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>

            <a href="http://instagram.com/i__bhaskar.kumar" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
