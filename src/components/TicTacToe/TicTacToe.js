import {useState} from "react";
import {Cell} from "../Cell/Cell";
import './TicTacToe.css'
import {commonTableStyles} from "../style";

export function TicTacToe({onPlacement, currentPiece}) {
    let [board, setBoard] = useState(new Array(9).fill(""));

    const placeIsOpen = placement => board[placement] === "";
    const placePiece = (index) => {
        if (placeIsOpen(index)) {
            setBoard((prev) => {
                prev[index] = currentPiece;
                return prev;
            });
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