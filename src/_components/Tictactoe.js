import React from 'react';
import { checkForWinner } from './Winner';

const Board = () => {
    const [player, setPlayer] = React.useState(1);
    const [gameState, setGameState] = React.useState([]);
    let status = `Winner is ${checkForWinner(gameState)}`;

    let turn = '';
    player === 1 ? turn = 'X' : turn = 'O';

    console.log(`We have a winner ${status}`);

    const takeTurn = (id) => {
        setGameState([...gameState, { id: id, player: player }]);
        setPlayer((player + 1) % 2);
        return player;
    };

    function renderSquare(i) {
        return <Square takeTurn={takeTurn} id={i}></Square>;
    };

    return (
        <div className="game-board">
        <div className="grid-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="grid-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="grid-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
        <div id="info">
            <h1 id='turn'>Next Play: Player {turn}</h1>
            <h1>{status}</h1>
        </div>
        </div>
    );
};

const Square = ({ takeTurn, id }) => {
    const mark = ['O', 'X', '+'];
    // takeTurn to tell Parent that the square has been filled
    const [filled, setFilled] = React.useState(false);
    const [tik, setTik] = React.useState(2);

    return (
        <button
        onClick={() => {
            setTik(takeTurn(id));
            setFilled(true);
            console.log(`Square: ${id} filled by player : ${tik}`);
        }}
        >
        <h1
            className={ mark[tik] === 'X' ? 'red' : 'white'}
        >{mark[tik]}</h1>
        </button>
    );
    };

export const Game = () => {
    return (
        <div className="game">
        <Board></Board>
        </div>
    );
};

