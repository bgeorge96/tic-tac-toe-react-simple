import {cleanup, fireEvent, render, screen} from "@testing-library/react";
import {TicTacToe} from "./TicTacToe";

describe('TicTacToe Tests', () => {
    let onPlacement;
    let testRerender;
    let currentPiece;

    beforeEach(async () => {
        currentPiece = "First Move";
        onPlacement = jest.fn();
        const {rerender} =  render(<TicTacToe onPlacement={onPlacement} currentPiece={currentPiece}/>);
        testRerender = rerender;
    });

    afterEach(async () => {
        cleanup();
    })

    test('should render the application with correct board numbers', async () => {
        let cells = await screen.findAllByRole('cell');
        expect(cells).toHaveLength(9);
    });

    test('should allow a player to select a cell that is empty', async () => {
        let cells = await screen.findAllByRole('cell');
        fireEvent.click(cells[0]);
        currentPiece = "Second Move"
        testRerender(<TicTacToe onPlacement={onPlacement} currentPiece={currentPiece} />)
        await screen.findByText(/first move/i);
        fireEvent.click(cells[1]);
        testRerender(<TicTacToe onPlacement={onPlacement} currentPiece={currentPiece} />)
        await screen.findByText(/second move/i);
        expect(onPlacement).toBeCalledTimes(2);
    });

    test('should not allow a player to select a cell that isn`t empty', async () => {
        let cells = await screen.findAllByRole('cell');
        fireEvent.click(cells[0]);
        currentPiece = "Second Move"
        testRerender(<TicTacToe onPlacement={onPlacement} currentPiece={currentPiece} />)
        await screen.findByText(/first move/i);
        fireEvent.click(cells[0]);
        testRerender(<TicTacToe onPlacement={onPlacement} currentPiece={currentPiece} />)
        let htmlElement = screen.queryByText(/second move/i);
        expect(htmlElement).not.toBeInTheDocument();
        expect(onPlacement).toBeCalledTimes(1);
    });

    test('should place the player piece when a cell is selected', async () => {
        let cells = await screen.findAllByRole('cell');
        fireEvent.click(cells[0]);
        testRerender(<TicTacToe onPlacement={onPlacement} currentPiece={currentPiece} />)
        await screen.findByText(/first move/i);
        expect(onPlacement).toBeCalledTimes(1);
    });
});