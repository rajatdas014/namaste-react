import { useEffect, useState } from "react"
import { MENU_DATA } from "../utils/contants";

const useRestaurantMenu = (resId) => {

    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        fetchdata();
    }, [])

    const fetchdata = async () => {
        const data = await fetch(MENU_DATA + resId);
        const json = await data.json();
        setResMenu(json);
    }
    return resMenu;
}

export default useRestaurantMenu