import React from "react";
import { useState } from "react";



export default function Home() {
  const [status, setStatus] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [turn, setTurn] = useState('⚪︎');
  const [winner, setWinner] = useState('');

  const handleChoice = (row: number, col: number) => {
    if (winner === '') {
      setStatus((prevStatus) => {
        const newStatus = prevStatus.map(row => [...row]);
        if (newStatus[row][col] === '') {
          if (turn === '⚪︎') {
            newStatus[row][col] = '⚪︎';
            setTurn('×');
          } else {
            newStatus[row][col] = '×';
            setTurn('⚪︎');
          }
        }
        winnerCheck(newStatus);
        return newStatus;
      });
    }
  };

  const handleClear = () => {
    setStatus([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setWinner('');
    setTurn('⚪︎');
  };


  const winnerCheck = (status) => {
    let count = 0;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (status[row][col] !== '') {
          count++;
        }
      }
    }
    if (count === 9) {
      setWinner('Draw');
    }

    for (let row = 0; row < 3; row++) {
      if (status[row][0] === '⚪︎' && status[row][1] === '⚪︎' && status[row][2] === '⚪︎') {
        setWinner('⚪︎');
      }
      if (status[row][0] === '×' && status[row][1] === '×' && status[row][2] === '×') {
        setWinner('×');
      }
    }
    for (let col = 0; col < 3; col++) {
      if (status[0][col] === '⚪︎' && status[1][col] === '⚪︎' && status[2][col] === '⚪︎') {
        setWinner('⚪︎');
      }
      if (status[0][col] === '×' && status[1][col] === '×' && status[2][col] === '×') {
        setWinner('×');
      }
    }
    if (status[0][0] === '⚪︎' && status[1][1] === '⚪︎' && status[2][2] === '⚪︎') {
      setWinner('⚪︎');
    }
    if (status[0][0] === '×' && status[1][1] === '×' && status[2][2] === '×') {
      setWinner('×');
    }
    if (status[0][2] === '⚪︎' && status[1][1] === '⚪︎' && status[2][0] === '⚪︎') {
      setWinner('⚪︎');
    }
    if (status[0][2] === '×' && status[1][1] === '×' && status[2][0] === '×') {
      setWinner('×');
    }

  };

  const display = (row: number, col: number) => {
    return status[row][col];
  };


  return (
    <>
      <h1>tic-tac-toe</h1>
      <div className="field">
        <button onClick={() => handleChoice(0, 0)}>{display(0, 0)}</button>
        <button onClick={() => handleChoice(0, 1)}>{display(0, 1)}</button>
        <button onClick={() => handleChoice(0, 2)}>{display(0, 2)}</button>
        <button onClick={() => handleChoice(1, 0)}>{display(1, 0)}</button>
        <button onClick={() => handleChoice(1, 1)}>{display(1, 1)}</button>
        <button onClick={() => handleChoice(1, 2)}>{display(1, 2)}</button>
        <button onClick={() => handleChoice(2, 0)}>{display(2, 0)}</button>
        <button onClick={() => handleChoice(2, 1)}>{display(2, 1)}</button>
        <button onClick={() => handleChoice(2, 2)}>{display(2, 2)}</button>
      </div>
      <button className="clear" onClick={handleClear}>clear</button>
      <p className={winner !== '' ? 'gameOver' : ''}>
        {winner === 'Draw' ? 'Draw' : `Winner is ${winner} !!`}
      </p>
      <p className={winner === '' ? 'gameOver' : ''}>{`Next move is for ${turn}`}</p>
    </>
  );
}
