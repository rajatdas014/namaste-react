import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../reducers/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("should render Header component with Login button", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )


    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
})

it("should change Login button to Logout button on click", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )


    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
})

it("should render Header component with Cart", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )


    const cart = screen.getByText(/🛒/);
    expect(cart).toBeInTheDocument();
})

it("should render Header component with Cart items 0", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )


    const cartItems = screen.getByText("🛒(0)");
    expect(cartItems).toBeInTheDocument();
})