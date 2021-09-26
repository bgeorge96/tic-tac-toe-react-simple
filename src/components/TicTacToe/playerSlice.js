import {createSlice} from '@reduxjs/toolkit'
import {checkWin, newBoard} from "./Game/GameLogic";

const newGame = {
    player: 1,
    currentPlayerPiece: 'X',
    playerPieces: ['X', 'O'],
    isWinner: false,
    gameBoard: newBoard()
}

export const playerSlice = createSlice({
    name: 'player',
    initialState: newGame,
    reducers: {
        nextPlayer: (state, action) => {
            const currentPlayer = state.player;
            const nextToPlay = (currentPlayer % 2) + 1;
            state.gameBoard[action.payload.place] = currentPlayer - 1;
            state.isWinner = checkWin([...state.gameBoard]);
            if (!state.isWinner) {
                state.player = nextToPlay;
                state.currentPlayerPiece = state.playerPieces[nextToPlay - 1];
            }
        },
        setNewGame: state => {
            state.player = newGame.player;
            state.currentPlayerPiece = newGame.currentPlayerPiece;
            state.playerPieces = newGame.playerPieces;
            state.isWinner = newGame.isWinner;
            state.gameBoard = newGame.gameBoard;
        }
    },
})

export const {nextPlayer, setNewGame} = playerSlice.actions

export default playerSlice.reducer