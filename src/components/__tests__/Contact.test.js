import { getByRole, render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Us Page Test Cases", () => {

    // beforeAll(() => {
    //     console.log("Before All")
    // });
    // beforeEach(() => {
    //     console.log("Before Each")
    // });
    // afterAll(() => {
    //     console.log("After All")
    // });
    // afterEach(() => {
    //     console.log("After Each")
    // });

    test('should load contact component', () => {
        render(< Contact />);
        const heading = screen.getByRole("heading");

        // Asertion
        expect(heading).toBeInTheDocument();
    });

    test('should load button inside contact component', () => {
        render(< Contact />);
        const button = screen.getByRole("button");

        // Asertion
        expect(button).toBeInTheDocument();
    });

    test('should load input name inside contact component', () => {
        render(< Contact />);
        const inputName = screen.getByPlaceholderText("Enter your name");

        // Asertion
        expect(inputName).toBeInTheDocument();
    });

    test('should load all input boxes inside contact component', () => {
        render(< Contact />);
        const inputBox = screen.getAllByRole("textbox");

        // Asertion
        expect(inputBox.length).toBe(2);
    });
});