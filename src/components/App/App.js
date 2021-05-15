import './App.css';
import {TicTacToe} from '../TicTacToe/TicTacToe';
import {useState} from "react";

function App() {
    let [player, setPlayer] = useState(1);
    let [playerChar, setPlayerCharacter] = useState("X");
    let [isWinner, setWinner] = useState(false);
    const updatePlayer = () => {
        setPlayer((prevState) => (prevState % 2) + 1)
        setPlayerCharacter((prevState) => prevState === "X" ? "O" : "X")
    }
    const continueGame = <h3>It is player {player}'s turn, using character: {playerChar}</h3>;
    const declareWinner = <h3>Congratulations to player {player} for winning the game!</h3>;

    return (
        <div className="App">
            <h2>TicTacToe</h2>
            {isWinner ? declareWinner : continueGame}
            <TicTacToe onWin={() => setWinner(true)} onPlacement={() =>
                isWinner ?
                    {} :
                    updatePlayer()} currentPiece={playerChar}
            />
        </div>
    );
}


export default App;
