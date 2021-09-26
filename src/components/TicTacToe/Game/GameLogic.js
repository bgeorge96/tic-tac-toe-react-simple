function newBoard() {
    return new Array(9).fill(-1);
}

function checkWin(board) {
    const boolArray = [];
    boolArray.push(
        (board[0] !== -1) && (board[0] === board[1]) && (board[1] === board[2]),
        (board[3] !== -1) && (board[3] === board[4]) && (board[4] === board[5]),
        (board[6] !== -1) && (board[6] === board[7]) && (board[7] === board[8]),
        (board[0] !== -1) && (board[0] === board[3]) && (board[3] === board[6]),
        (board[1] !== -1) && (board[1] === board[4]) && (board[4] === board[7]),
        (board[2] !== -1) && (board[2] === board[5]) && (board[5] === board[8]),
        (board[0] !== -1) && (board[0] === board[4]) && (board[4] === board[8]),
        (board[2] !== -1) && (board[2] === board[4]) && (board[4] === board[6]),
    );
    //if some value is true there is a win
    return boolArray.some((value => value));
}

const placeIsOpen = (board, placement) => board[placement] === -1;

export {placeIsOpen, checkWin, newBoard};