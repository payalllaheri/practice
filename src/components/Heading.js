import React from "react";

import "./heading.css";
import TypeWriterEffect from 'react-typewriter-effect';
const Heading = ({ title }) => {
  return (
    <div
      style={{ fontSize: "68px", marginBottom: "100px" }}
      className="typed-out"
    >
      <TypeWriterEffect
        textStyle={{ fontFamily: "Red Hat Display" }}
        startDelay={100}
        cursorColor="black"
        text={title}
        typeSpeed={100}
        eraseSpeed={100}
      />
    </div>
  );
};

export default Heading;
