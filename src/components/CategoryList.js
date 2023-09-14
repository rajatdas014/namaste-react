import { CATEGORY_IMG } from "../utils/contants";
const CategoryList = ({ catogoryListData }) => {
    return (
        <div className="category-list">
            {catogoryListData.itemCards.map((accItem) => (
                <div key={accItem.card?.info?.id} className="data-list flex justify-between py-2 border-b-[1px] last:border-b-0 w-[100%]">
                    <div className="text-left py-2 px-2 flex flex-col justify-between w-[80%]" >
                        <h1 className="pb-4">{accItem.card?.info?.name} - ₹ {accItem.card?.info?.defaultPrice ? accItem.card?.info?.defaultPrice / 100 : accItem.card?.info?.price / 100}</h1>
                        <p className="text-xs">{accItem.card?.info?.description}</p>
                    </div>
                    <div className="img-holder relative w-[20%]">
                        <button className="absolute bg-black text-white py-0 px-2 mx-auto left-[63%] bottom-[-5px] rounded-lg">Add</button>
                        <img src={CATEGORY_IMG + accItem.card?.info?.imageId} alt="" className="w-[118px] h-[96px] rounded-lg float-right" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategoryList