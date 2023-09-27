import { CARD_URL } from "../utils/contants"

const RestaurantCard = (props) => {

    const { resData } = props
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData.info
    const { deliveryTime } = sla
    return (
        <div data-testid="resCard" className="pb-2 m-2 w-[265px] bg-slate-50 shadow-lg h-[30vw] overflow-hidden">
            <img className="h-[250px] w-[100%]" src={CARD_URL + cloudinaryImageId} alt="" />
            <h3 className="p-2 font-bold">{name}</h3>
            <h4 className="p-2">{cuisines.join(", ")}</h4>
            <h5 className="p-2">{avgRating} stars</h5>
            <h5 className="p-2">{deliveryTime} mins</h5>
        </div>
    )
}

export default RestaurantCard