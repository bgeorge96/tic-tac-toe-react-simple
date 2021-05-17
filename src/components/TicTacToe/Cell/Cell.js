import './Cell.css';
import {commonTableStyles} from "../../style";

export function Cell({index, piece, clickAction}) {
    return (
        <td className="Cell" name={'cell'} id={`cell-${index}`} style={commonTableStyles} onClick={() => clickAction()}>
            <h1 className="Cell-piece">{piece}</h1>
        </td>
    );
}