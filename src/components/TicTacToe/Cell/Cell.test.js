import {cleanup, fireEvent, render, screen} from "@testing-library/react";
import {Cell} from "./Cell";

describe('Cell Tests', () => {
    let clickAction;
    let piece;

    beforeEach(async () => {
        clickAction = jest.fn();
        piece = "test piece";
        render(<table><tbody><tr><Cell piece={piece} clickAction={clickAction}/></tr></tbody></table>);
    })

    afterEach(async () => {
        cleanup();
    });

    test('should create a cell with the initial piece prop', async () => {
        await screen.findByText(/test piece/i);
    });

    test('should call the click action prop when a cell is clicked', async () => {
        let element = await screen.findByText(/test piece/i);
        await fireEvent.click(element);
        expect(clickAction).toBeCalledTimes(1);
    });
})