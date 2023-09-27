import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"


it("should render card component with props Data", () => {

    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Andhra Gunpowder");

    expect(name).toBeInTheDocument();


})