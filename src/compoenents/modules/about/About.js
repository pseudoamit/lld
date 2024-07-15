import React from "react";
import { translator } from "../../../translatorConfig";

const About = ({ language }) => {
  return (
    <>
      <h1>{translator["about"][language].title}</h1>
      <p>{translator["about"][language].text}</p>
    </>
  );
};

export default About;
