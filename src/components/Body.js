import RestaurantCard from "./RestaurantCard.js"
import restList from "../utils/cardData.js"
import { useEffect, useState } from "react"
import { CARD_DATA } from "../utils/contants.js"
import Shimmer from "./Shimmer.js"
import { Link } from "react-router-dom"

const Body = () => {

    // Whenever state variable update, react triggers a reconcilation cycle(re-renders the component)
    const [listOfRes, setlistOfRes] = useState([]);
    const [filterRes, setFilterRes] = useState([]);
    const [searchText, useSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(CARD_DATA);
        const json = await data.json();
        // Optional Chaining "?"
        setlistOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("listOfRes", json)
    }

    if (listOfRes.length === 0) return <Shimmer />

    // Conditional Rendering
    return (
        <div className="body">
            <input type="text" className="filter-box" onChange={(event) => {
                useSearchText(event.target.value);
            }} value={searchText} />
            <button className="search-btn" onClick={() => {
                const searchResList = listOfRes.filter((result) => result.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilterRes(searchResList);
                // console.log("filtered with search", listOfRes);
            }}>Search</button>

            <button className="top-res-btn" onClick={() => {
                const filteredList = listOfRes.filter((result) => result.info.avgRating > 4.2)
                setFilterRes(filteredList)
                // console.log("filteredList",filteredList)
            }}>Top Rated Restaurants</button>

            <div className="res-container">
                {filterRes.map((resIterate) => (
                    <Link key={resIterate.info.id} to={"/restaurantmenu/" + resIterate.info.id}> <RestaurantCard resData={resIterate} /></Link>
                ))}
            </div>
        </div>
    )
}

export default Body