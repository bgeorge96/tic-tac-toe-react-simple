import {cleanup, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('App Tests', () => {
    beforeEach(async () => {
        render(<App/>);
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
