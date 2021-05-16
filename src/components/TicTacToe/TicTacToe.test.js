import {cleanup, render, screen} from '@testing-library/react';
import TicTacToe from './TicTacToe';
import userEvent from "@testing-library/user-event";

describe('TicTacToe Tests', () => {
    beforeEach(async () => {
        render(<TicTacToe/>);
    });

    afterEach(async () => {
        cleanup();
    })

    test('renders inital text', async () => {
        await screen.findByText(/tictactoe/i);
        await screen.findByText(/It is player 1's turn, using character: X/i);
    });

    test('should update player and piece object', async () => {
        await screen.findByText(/It is player 1's turn, using character: X/i);
        await userEvent.click(screen.getAllByRole('cell')[0])
        await screen.findByText(/It is player 2's turn, using character: O/i);
    });
});
