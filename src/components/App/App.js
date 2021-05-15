import './App.css';
import {TicTacToe} from '../TicTacToe/TicTacToe';
import {useState} from "react";

function App() {
    let [playerTurn, setPlayerTurn] = useState(0);
    let [playerChar, setPlayerCharacter] = useState("X");
    const updatePlayer = () => {
        setPlayerTurn((prevState) => prevState+1)
        setPlayerCharacter((prevState) => prevState === "X" ? "O" : "X")
    }

    return (
        <div className="App">
            <h2>TicTacToe</h2>
            <h3>It is player {(playerTurn % 2) + 1}'s turn, using character: {playerChar}</h3>
            <TicTacToe onPlacement={() => updatePlayer()} currentPiece={playerChar}/>
        </div>
    );
}


export default App;
