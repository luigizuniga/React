import React, { Fragment , useState} from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';

const Game =()=>{
    // Definicion useState
    const [ history, setHistory ] = useState([Array(9).fill(null)]);
    const [ stepNumber , setStepNumber ] = useState(0);
    const [ xIsNext, setXisNext ] = useState(true);

    const winner = calculateWinner(history[stepNumber]);

    const xO = xIsNext ? "X" : "0";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[ stepNumber ];
        const squares = [...current];

        if(winner || squares[i]) return;

        squares[i] = xO;

        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);

    }

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    }

    const renderMoves = () => history.map((_step, move) => {
            const destination = move ? + `Go to move #${ move }`: "Go to Start";
            return (
                <li key={ move }>
                    <button onClick={ ()=> jumpTo(move) }> { destination }</button>
                </li>
            );
    });


    return(
        <Fragment>
            <h1>React Tic Tac Toe - With Hooks</h1>
            <Board squares={ history[stepNumber]} onClick={ handleClick } />

            <div>
                <h3>History</h3>
                { renderMoves() }
            </div>

            <h3>{ winner ? "Winner:" + winner:"Next Player" + xO } </h3>
        </Fragment>
    );
}
export default Game;