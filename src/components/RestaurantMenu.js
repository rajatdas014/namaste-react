import { useEffect, useState } from "react"
import { MENU_DATA } from "../utils/contants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resMenu, setResMenu] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_DATA + resId);
        const json = await data.json();
        setResMenu(json)
        console.log(json);
    }
    if (resMenu === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resMenu?.data?.cards[0]?.card?.card?.info;
    const { itemCards } = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <ul>
                {itemCards.map((results) => (<li key={results?.card?.info?.id}>{results.card.info.name} - {"Rs"}{results?.card?.info?.price / 100 || results?.card?.info?.defaultPrice / 100}</li>))}
            </ul>
        </div>
    )
}

export default RestaurantMenu