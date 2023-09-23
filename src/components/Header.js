import { useContext, useState } from "react"
import { LOGO_URL } from "../utils/contants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnLogin, useBtnLogin] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    // ("Header Called");
    // If no dependency array => useEffect is called on every render
    // If dependency array is empty = [] => useEffect is called on initial render(just once)
    // If the dependency array has any dependency, useEffect is called everytime that dependency is updated.

    // useEffect(() => {
    //     console.log(useEffect Called);
    // }, [btnLogin);

    // Subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);


    return (
        <div className="flex justify-between bg-orange-100 py-2 shadow-lg">
            <div className="w-24 px-4">
                <img src={LOGO_URL} />
            </div>
            <div className="flex items-center px-4">
                <ul className="flex">
                    <li className="px-2">Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About Us</Link></li>
                    <li className="px-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-2"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-2"><Link to="/Cart">🛒({cartItems.length})</Link></li>
                    {/* <button className="bg-stone-500 text-white px-2 rounded mx-2" onClick={() => {
                        btnLogin === "Login" ?
                            useBtnLogin("Logout")
                            :
                            useBtnLogin("Login")
                    }}>{btnLogin}</button> */}
                    <li className="px-2">{loggedInUser}</li>
                </ul>
            </div>

        </div>
    )
}

export default Header