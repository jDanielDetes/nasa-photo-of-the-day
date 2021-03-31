import React from "react";
import Example from "./Example";

const MainImgHolder = props => {
  return (
    <div>
      <h1>NASA Photo of the day!</h1>
      <h2>Title: {props.title}</h2>
      <h3>Date:{props.date}</h3>
      <img src={props.url} alt="" />
      <p>{props.explanation}</p>
    </div>
  );
};

export default MainImgHolder;
