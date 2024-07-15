import React from "react";
import { translator } from "../../../translatorConfig";

const Team = ({ language }) => {
  return (
    <>
      <h1>{translator["team"][language].title}</h1>
      <p>{translator["team"][language].text}</p>
    </>
  );
};

export default Team;
