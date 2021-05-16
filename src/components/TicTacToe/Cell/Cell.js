import './Cell.css';
import {commonTableStyles} from "../../style";

export function Cell({piece, clickAction}) {
    return (
        <td className="Cell" name={'cell'} style={commonTableStyles} onClick={() => clickAction()}>
            <h1 className="Cell-piece">{piece}</h1>
        </td>
    );
}