import React, { useState } from "react";

import Scoring from "../components/Scoring";
import Author from "../components/Author";

const styles = {
  backgroundColor: "#ecf0f1",
  border: "1px solid #2ecc71",
  padding: 10,
  para: {
    backgroundColor: "#f6e58d",
    padding: 10
  }
}

function News({ header, intro, author }) {
  const [score] = useState(4);
  return (
    <div style={styles}>
      <h2>{header}</h2>
      <p style={styles.para}>{intro}</p>
      <Scoring score={score} />
      <Author author={author} />
      <p>Score: {score}</p>
    </div>
  )
}

export default News;