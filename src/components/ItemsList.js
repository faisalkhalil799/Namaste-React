import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemsList = ({ items, showAddButton = true }) => {
  const dispatch = useDispatch();

  return (
    <div className="divide-y divide-slate-200 px-5 pb-4">
      {items?.map((item) => (
        <div key={item.id} className="flex items-start justify-between py-4">
          {/* LEFT */}
          <div className="flex flex-col gap-1">
            <h3 className="font-medium text-slate-800">{item.name}</h3>

            <p className="text-sm text-slate-500">
              ⭐ {item.rating} ({item.ratingCount})
            </p>

            <p className="text-sm font-semibold text-slate-700">
              ₹{item.price}
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {showAddButton ? (
              <button
                onClick={() => {
                  dispatch(addItem(item));
                  console.log(item);
                }}
                className="rounded-md border border-emerald-600 
                           px-4 py-1 text-sm font-semibold 
                           text-emerald-600 hover:bg-emerald-50"
              >
                ADD
              </button>
            ) : (
              <button
                onClick={() => {
                  console.log(item.id);
                  dispatch(removeItem(item.id));
                }}
                className="rounded-md border border-rose-600 
                           px-4 py-1 text-sm font-semibold 
                           text-rose-600 hover:bg-rose-50"
              >
                REMOVE
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
