import './TicTacToe.css';
import {Board} from './Board/Board';
import {useSelector} from "react-redux";

function TicTacToe() {
    const {player, currentPlayerPiece, isWinner} = useSelector(state => state.player);
    const continueGame = <h3>It is player {player}'s turn, using character: {currentPlayerPiece}</h3>;
    const declareWinner = <h3>Congratulations to player {player} for winning the game!</h3>;

    return (
        <div className="TicTacToe">
            <h2>TicTacToe</h2>
            {isWinner ? declareWinner : continueGame}
            <Board/>
        </div>
    );
}


export default TicTacToe;
