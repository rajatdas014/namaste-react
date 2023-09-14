import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {

    const { resId } = useParams();
    const resMenu = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

    if (resMenu === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resMenu?.data?.cards[0]?.card?.card?.info;
    const categories = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (cardData) =>
            cardData.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    return (
        <div className="menu text-center">
            <h1 className="font-bold my-2 mx-auto p-2 text-lg">{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((dataList, index) =>
                // Controlled Components 
                <RestaurantCategory
                    key={dataList?.card?.card?.title}
                    resCatogoryList={dataList?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />)}
        </div>
    )
}

export default RestaurantMenu