import { CARD_URL } from "../utils/contants"

const RestaurantCard = (props) => {

    const { resData } = props
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData.info
    const { deliveryTime } = sla
    return (
        <div className="res-card">
            <img className="res-logo" src={CARD_URL + cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
            <h5>{deliveryTime} mins</h5>
        </div>
    )
}

export default RestaurantCard