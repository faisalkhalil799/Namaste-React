import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemsList from "./ItemsList";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div
      className="mx-auto mt-10 max-w-2xl rounded-lg 
                    border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">
          Cart ({cartItems.length})
        </h1>

        {cartItems.length > 0 && (
          <button
            onClick={() => dispatch(clearCart())}
            className="rounded-md bg-rose-600 
                       px-4 py-2 text-sm font-semibold 
                       text-white hover:bg-rose-700"
          >
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <p className="text-slate-500 text-center">Your cart is empty 🛒</p>
      ) : (
        <ItemsList items={cartItems} showAddButton={false} />
      )}
    </div>
  );
};

export default Cart;
