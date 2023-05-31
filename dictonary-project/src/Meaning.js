import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <div className="definition">{definition.definition}</div>
              <br />
              <div className="example">{definition.example}</div>
            </p>
          </div>
        );
      })}
    </div>
  );
}
