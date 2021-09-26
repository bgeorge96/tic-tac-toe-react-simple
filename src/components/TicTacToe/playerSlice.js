import {createSlice} from '@reduxjs/toolkit'
import {checkWin, newBoard} from "./Game/GameLogic";

export const playerSlice = createSlice({
    name: 'player',
    initialState: {
        player: 1,
        currentPlayerPiece: 'X',
        playerPieces: ['X', 'O'],
        isWinner: false,
        gameBoard: newBoard()
    },
    reducers: {
        nextPlayer: (state, action) => {
            const currentPlayer = state.player;
            const nextToPlay = (currentPlayer % 2) + 1;
            state.player = nextToPlay;
            state.currentPlayerPiece = state.playerPieces[nextToPlay - 1];
            state.gameBoard[action.payload.place] = currentPlayer - 1;
            state.isWinner = checkWin([...state.gameBoard]);
        }
    },
})

// Action creators are generated for each case reducer function
export const {nextPlayer} = playerSlice.actions

export default playerSlice.reducer