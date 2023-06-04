import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      // eslint-disable-next-line
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      <br />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
