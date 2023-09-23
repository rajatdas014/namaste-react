import { useDispatch, useSelector } from "react-redux"
import CategoryList from "./CategoryList"
import { clearCart } from "../reducers/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch()
    const handlerClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="my-4 mx-auto p-4 text-center w-9/12">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Cart Data</h1>
                <button className="bg-black text-white px-2 rounded-lg" onClick={handlerClearCart}>Clear Cart</button>
            </div>
            {cartItems.length === 0 && <h1>Cart is Empty, Add Items to Cart</h1>}
            <div className="cart-data my-4">
                <CategoryList catogoryListData={cartItems} />
            </div>
        </div>
    )
}
export default Cart