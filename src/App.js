import React from "react";
import { useState, useCallback } from "react";
import Board from "./Board.js";
import "./style.css";

export default function App() {
  const [xturn, setXturn] = useState(true);
  const updateTurn = useCallback(() => setXturn(!xturn));

  return (
    <main>
      <h2>Noughts & Crosses</h2>
      {xturn ? (
        <h3 className="turn">X's Turn</h3>
      ) : (
        <h3 className="turn">O's Turn</h3>
      )}
      <Board turn={xturn ? "X" : "O"} updateTurn={updateTurn} />
    </main>
  );
}
