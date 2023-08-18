import { useState } from "react"
import { LOGO_URL } from "../utils/contants"

const Header = () => {
    const [btnLogin, useBtnLogin] = useState("Login");

    console.log("Header Called");
    // If no dependency array => useEffect is called on every render
    // If dependency array is empty = [] => useEffect is called on initial render(just once)
    // If the dependency array has any dependency, useEffect is called everytime that dependency is updated.

    // useEffect(() => {
    //     console.log(useEffect Called);
    // }, [btnLogin);


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnLogin === "Login" ?
                            useBtnLogin("Logout")
                            :
                            useBtnLogin("Login")
                    }}>{btnLogin}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header