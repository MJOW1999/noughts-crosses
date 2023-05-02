import React from "react";
import { useState, useCallback, useEffect } from "react";
import Square from "./Square.js";

export default function Board(props) {
  const { turn, updateTurn } = props;
  const initialBoardState = [".", ".", ".", ".", ".", ".", ".", ".", "."];
  const [board, setBoard] = useState(initialBoardState);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    console.log({ turn });
    const gameOver = check();
    if (gameOver) {
      setWinner(turn === "X" ? "O" : "X");
    } else {
      setWinner(false);
    }
  }, [board]);

  const check = useCallback(() => {
    // check each row and column
    for (let i = 0; i < 3; i++) {
      // row
      if (
        board[i * 3] !== "." &&
        board[i * 3] === board[i * 3 + 1] &&
        board[i * 3] === board[i * 3 + 2]
      ) {
        return true;
      }
      // column
      if (
        board[i] !== "." &&
        board[i] === board[i + 3] &&
        board[i] === board[i + 6]
      ) {
        return true;
      }
    }
    // now check diagonals
    if (board[0] !== "." && board[0] === board[4] && board[0] === board[8]) {
      return true;
    }
    if (board[2] !== "." && board[2] === board[4] && board[2] === board[6]) {
      return true;
    }
    return false;
  }, [board]);

  const updateSquare = useCallback(
    (i) => {
      setBoard(
        board
          .slice(0, i)
          .concat(turn)
          .concat(board.slice(i + 1))
      );
      updateTurn();
    },
    [board]
  );

  return (
    <div>
      {board.map((value, index) => {
        if (index % 3 === 0) {
          return (
            <>
              <div />
              <Square
                key={index}
                value={value}
                onClick={() => {
                  if (!winner) {
                    updateSquare(index);
                  }
                }}
              />
            </>
          );
        }
        return (
          <Square
            key={index}
            value={value}
            onClick={() => {
              if (!winner) {
                updateSquare(index);
              }
            }}
          />
        );
      })}
      <br />
      {winner && winner + " wins"}
      <br />

      <button
        onClick={() => {
          setBoard(initialBoardState);
        }}
      >
        Reset
      </button>
    </div>
  );
}
