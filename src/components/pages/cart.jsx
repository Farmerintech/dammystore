import { useContext } from "react";
import { ProductContext } from "../productContext";
import { BiCheck, BiDumbbell, BiMinus, BiPlus, BiTrash } from "react-icons/bi";

export const Cart = ({ show }) => {
  const { state, dispatch } = useContext(ProductContext);
  console.log(state.cart); // Debugging line

  const addQuantity = (item) => {
    dispatch({ type: "addQuantity", payload: item });
  };

  const calculateTotal = () => {
    const total = state.cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return total; // Total price of all items in the cart
  };

  const decreaseQuantity = (item) => {
    dispatch({ type: "decreaseQuantity", payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "removeFromCart", payload: item });
  };

  return (
    <div
      className={`${
        show ? "fixed top-0 right-0 z-20 shadow-md bg-white h-[100vh] w-[300px] mt-10 " : "hidden"
      } flex flex-col justify-start overflow-y-auto`}
    >
      {state.cart.length === 0 ? (
        <p className="text-center mt-10">Your cart is empty.</p>
      ) : (
        state.cart.map((item) => (
          <div key={item.id} className="mt-10 flex mb-5 items-center pb-3 rounded-xl">
            <div className="p-5 flex justify-center">
              <img src={item.img} className="w-[100px] h-[100px] md:h-[120px]" alt={item.name} />
            </div>
            <div className="flex flex-col ml-3">
              <p>{item.name}</p>
              <p>${item.price}.00</p>
              <p>Quantity: {item.quantity}</p>
              <div className="flex mt-2">
                <button onClick={() => addQuantity(item)} className="mr-2">
                  <BiPlus />
                </button>
                <button onClick={() => decreaseQuantity(item)} className="mr-2">
                  <BiMinus />
                </button>
                <button onClick={() => removeFromCart(item)}>
                  <BiTrash />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="mt-auto p-5">
        <p className="font-bold">
          Total: ${calculateTotal()}.00
        </p>
      </div>
    </div>
  );
};
