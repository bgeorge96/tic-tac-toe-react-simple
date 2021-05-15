import {useState} from "react";
import {Cell} from "../Cell/Cell";
import './TicTacToe.css'
import {commonTableStyles} from "../style";

export function TicTacToe({onWin, onPlacement, currentPiece}) {
    let [board, setBoard] = useState(new Array(9).fill(""));

    const placeIsOpen = placement => board[placement] === "";

    const checkWin = () => {
        const boolArray = [];
        boolArray.push(
            (board[0] !== '') && (board[0] === board[1]) && (board[1] === board[2]),
            (board[3] !== '') && (board[3] === board[4]) && (board[4] === board[5]),
            (board[6] !== '') && (board[6] === board[7]) && (board[7] === board[8]),
            (board[0] !== '') && (board[0] === board[3]) && (board[3] === board[6]),
            (board[1] !== '') && (board[1] === board[4]) && (board[4] === board[7]),
            (board[2] !== '') && (board[2] === board[5]) && (board[5] === board[8]),
            (board[0] !== '') && (board[0] === board[4]) && (board[4] === board[8]),
            (board[2] !== '') && (board[2] === board[4]) && (board[4] === board[6]),
        );
        //if some value is true run win callback
        boolArray.some((value => value ? onWin() : {}));
    }

    const placePiece = (index) => {
        if (placeIsOpen(index)) {
            setBoard((prev) => {
                prev[index] = currentPiece;
                return prev;
            });
            checkWin();
            onPlacement();
        }
    }
    const createCell = place => <Cell piece={board[place]} clickAction={() => placePiece(place)}/>;

    return (
        <div className="TicTacToe">
            <table className="TicTacToe-table" style={commonTableStyles}>
                <tbody>
                <tr>
                    {createCell(0)}
                    {createCell(1)}
                    {createCell(2)}
                </tr>
                <tr>
                    {createCell(3)}
                    {createCell(4)}
                    {createCell(5)}
                </tr>
                <tr>
                    {createCell(6)}
                    {createCell(7)}
                    {createCell(8)}
                </tr>
                </tbody>
            </table>
        </div>
    );
}