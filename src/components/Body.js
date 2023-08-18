import RestaurantCard from "./RestaurantCard.js"
import restList from "../utils/cardData.js"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer.js"

const Body = () => {

    // Whenever state variable update, react triggers a reconcilation cycle(re-renders the component)
    const [listOfRes, setlistOfRes] = useState([]);
    const [filterRes, setFilterRes] = useState([]);
    const [searchText, useSearchText] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971598700000001&lng=77.59288900157468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // Optional Chaining "?"
        setlistOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log("listOfRes", listOfRes)
    }

    // Conditional Rendering
    return listOfRes.length === 0 ? <Shimmer /> : (
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
                    <RestaurantCard key={resIterate.info.id} resData={resIterate} />
                ))}
            </div>
        </div>
    )
}

export default Body