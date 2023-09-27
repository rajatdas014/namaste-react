import RestaurantCard from "./RestaurantCard.js"
import { useState, useEffect, useContext } from "react"
import Shimmer from "./Shimmer.js"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus.js"
import OfflineCard from "./OfflineCard.js"
import { CARD_DATA } from "../utils/contants.js"
import UserContext from "../utils/UserContext.js"

const Body = () => {

    // Whenever state variable update, react triggers a reconcilation cycle(re-renders the component)
    const [searchText, useSearchText] = useState("");
    const [listOfRes, setListOfRes] = useState(null);
    const [filterRes, setFilterRes] = useState(null);
    const onlineStatus = useOnlineStatus();
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch(CARD_DATA);
        const json = await data.json();
        // console.log("Json Data", json)
        setListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // console.log("List of Restaurants", listOfRes);

    const { loggedInUser, setUserName } = useContext(UserContext);

    if (onlineStatus === false) {
        return (
            <OfflineCard />
        )
    }

    if (listOfRes === null) return <Shimmer />

    // Conditional Rendering
    return (
        <div className="body">
            <div className="flex items-center">
                <input type="text" data-testid="searchInput" className="border border-solid border-black my-4 mx-2" onChange={(event) => {
                    useSearchText(event.target.value);
                }} value={searchText} />
                <button className="bg-green-100 px-2 py-1 rounded-md" onClick={() => {
                    const searchResList = listOfRes.filter((result) => result.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilterRes(searchResList);
                }}>Search</button>

                <button className="mx-2 bg-green-100 px-2 py-1 rounded-md" onClick={() => {
                    const filteredList = listOfRes.filter((result) => result.info.avgRating > 4.2)
                    setFilterRes(filteredList)
                }}>Top Rated Restaurants</button>
                {/* <div className="fle m-2 ml-10">
                    <label htmlFor="">Logged In User: </label>
                    <input type="text" className="border-black border px-2" value={loggedInUser} maxLength={15} onChange={(e) => { setUserName(e.target.value) }} />
                </div> */}
            </div>
            <div className="flex flex-wrap m-2">
                {filterRes.map((resIterate) => (
                    <Link key={resIterate.info.id} to={"/restaurantmenu/" + resIterate.info.id}> <RestaurantCard resData={resIterate} /></Link>
                ))}
            </div>
        </div>
    )
}

export default Body