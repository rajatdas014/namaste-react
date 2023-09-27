import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import { MOCK_DATA } from "../../components/mocks/mockResMenu.json"
import { render, screen } from "@testing-library/react"
import appStore from "../../reducers/appStore"
import { Provider } from "react-redux"
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should load restaurant menu component", async () => {
    // await act(async () => {
    //     render(<Provider store={appStore}><RestaurantMenu /></Provider>)

    //     expect(screen.getAllByTestId("foodItems").length).toBe(25);
    // })
})