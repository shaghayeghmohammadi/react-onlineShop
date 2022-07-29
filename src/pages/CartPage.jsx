import { useCart, useCartActions } from "../Providers/CartProvider";
import "./cartPage.css";
const CartPage = () => {
  const dispatch = useCartActions();
  const { cart, total } = useCart();

  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const removeHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };

  if (!cart.length)
    return (
      <main className="emptyCart">
        <h2>سبد خرید شما خالی است!</h2>
      </main>
    );

  return (
    <main className="container">
      <section className="cartCenter">
        <section className="cartItemList">
          {cart.map((item) => {
            return (
              <div className="cartItem">
                <div className="itemImg">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="detailContainer">
                  <div className="itemDetail">{item.name}</div>
                  <div className="itemDetail">
                    {item.price * item.quantity} تومان
                  </div>
                </div>

                <div className="btnList">
                  <button onClick={() => removeHandler(item)}>حذف</button>
                  <button>{item.quantity}</button>
                  <button onClick={() => incHandler(item)}>افزودن</button>
                </div>
              </div>
            );
          })}
        </section>
        <section className="cartSummary">
          <h2>جزئیات سفارش</h2>
          <p>جمع کل سبد خرید: {total} تومان</p>
        </section>
      </section>
    </main>
  );
};

export default CartPage;
