import CategoryList from "./CategoryList";

const RestaurantCategory = ({ resCatogoryList, showItems, setShowIndex }) => {

    const accordianClick = () => {
        setShowIndex();
        // setIndexBoolean();
    }
    return (
        <div className="menu-category flex flex-col">
            <div className="flex w-9/12 bg-slate-100 justify-between my-2 mx-auto p-2 shadow-lg cursor-pointer" onClick={accordianClick}>
                <h1>{resCatogoryList.title} <span>({resCatogoryList.itemCards.length})</span></h1>
                <span>&darr;</span>
            </div>
            <div className="menu-content w-9/12 mx-auto">
                {showItems && <CategoryList key={resCatogoryList.title} catogoryListData={resCatogoryList} />}
            </div>
        </div>
    )
}

export default RestaurantCategory