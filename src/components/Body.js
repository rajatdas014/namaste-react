import RestaurantCard from "./RestaurantCard.js"
import restList from "../utils/cardData.js"
import { useState } from "react"

const Body = () => {
    const [listOfRes, setlistOfRes] = useState(restList)
    return (
        <div className="body">
            <button className="top-res-btn" onClick={() => {
                const filteredList = restList.filter((result) => result.info.avgRating > 4.2)
                setlistOfRes(filteredList)
                // console.log("filteredList",filteredList)
            }}>Top Rated Restaurants</button>
            <div className="res-container">
                {listOfRes.map((resIterate) => (
                    <RestaurantCard key={resIterate.info.id} resData={resIterate} />
                ))}
            </div>
        </div>
    )
}

export default Body