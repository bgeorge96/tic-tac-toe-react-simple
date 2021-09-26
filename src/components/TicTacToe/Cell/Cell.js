import './Cell.css';
import {commonTableStyles} from "../../style";
import {useDispatch, useSelector} from "react-redux";
import {nextPlayer} from "../playerSlice";

export function Cell({index}) {
    const dispatch = useDispatch();
    const playerNum = useSelector(state => state.player.gameBoard[index]);
    const {playerPieces, isWinner} = useSelector(state => state.player);
    const getPieceAtPlace = () => {
        if (playerNum === -1) return "";
        return playerPieces[playerNum];
    }
    const placePiece = () => {
        if (playerNum === -1 && !isWinner) {
            dispatch(nextPlayer({place: index, player: playerNum}))
        }
    };

    return (
        <td className="Cell" name={'cell'} id={`cell-${index}`} style={commonTableStyles} onClick={() => placePiece()}>
            <h1 className="Cell-piece">{getPieceAtPlace()}</h1>
        </td>
    );
}