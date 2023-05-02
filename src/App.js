import React from "react";
import { useState, useCallback } from "react";
import Board from "./Board.js";
import "./style.css";

export default function App() {
  const [xturn, setXturn] = useState(true);
  const updateTurn = useCallback(() => setXturn(!xturn));

  return (
    <>
      <h2>Noughts & Crosses</h2>
      {xturn ? "X's " : "O's"} Turn
      <Board turn={xturn ? "X" : "O"} updateTurn={updateTurn} />
    </>
  );
}
