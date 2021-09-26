import {Cell} from "../Cell/Cell";
import './Board.css'
import {commonTableStyles} from "../../style";

export function Board() {
    return (
        <div className="Board">
            <table className="Board-table" style={commonTableStyles}>
                <tbody>
                <tr>
                    <Cell index={0}/>
                    <Cell index={1}/>
                    <Cell index={2}/>
                </tr>
                <tr>
                    <Cell index={3}/>
                    <Cell index={4}/>
                    <Cell index={5}/>
                </tr>
                <tr>
                    <Cell index={6}/>
                    <Cell index={7}/>
                    <Cell index={8}/>
                </tr>
                </tbody>
            </table>
        </div>
    );
}