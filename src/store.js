import {configureStore} from '@reduxjs/toolkit'
import playerReducer from "./components/TicTacToe/playerSlice";

export default configureStore({
    reducer: {
        player: playerReducer
    },
})