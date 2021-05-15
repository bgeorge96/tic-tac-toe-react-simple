import {useState} from "react";
import {Cell} from "../Cell/Cell";
import './TicTacToe.css'
import {commonTableStyles} from "../style";

export function TicTacToe({onPlacement, currentPiece}) {
    let [board, setBoard] = useState(new Array(9).fill(""));
    const placePiece = (index) => {
        setBoard((prev) => {
            prev[index] = currentPiece;
            return prev;
        });
        onPlacement();
    }

    return (
        <div className="TicTacToe">
            <table className="TicTacToe-table" style={commonTableStyles}>
                <tbody>
                <tr>
                    <Cell piece={board[0]} clickAction={() => placePiece(0)}/>
                    <Cell piece={board[1]} clickAction={() => placePiece(1)}/>
                    <Cell piece={board[2]} clickAction={() => placePiece(2)}/>
                </tr>
                <tr>
                    <Cell piece={board[3]} clickAction={() => placePiece(3)}/>
                    <Cell piece={board[4]} clickAction={() => placePiece(4)}/>
                    <Cell piece={board[5]} clickAction={() => placePiece(5)}/>
                </tr>
                <tr>
                    <Cell piece={board[6]} clickAction={() => placePiece(6)}/>
                    <Cell piece={board[7]} clickAction={() => placePiece(7)}/>
                    <Cell piece={board[8]} clickAction={() => placePiece(8)}/>
                </tr>
                </tbody>
            </table>
        </div>
    );
}