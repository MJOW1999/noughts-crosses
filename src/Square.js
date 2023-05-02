import React from "react";

export default function Square(props) {
  return (
    <span className={"square"} onClick={props.onClick}>
      {props.value}
    </span>
  );
}
