import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import "@testing-library/jest-dom"
import MOCK_DATA from "../../components/mocks/mockResListData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("should search lists for burger text input", async () => {
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))


    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } })
    fireEvent.click(searchBtn);

    // expect(searchBtn).toBeInTheDocument();

    // screen should load 4 cards
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(2);

})

it("should filter top rated restaurant", async () => {
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))


    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
    fireEvent.click(topRatedBtn);

    // screen should load filtered cards
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(11);

})