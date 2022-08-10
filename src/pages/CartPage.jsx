import { useCart, useCartActions } from "../Providers/CartProvider";
import Layout from "../Layout/Layout";
import "./cartPage.css";
import { FaRegTrashAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const CartPage = () => {
  const dispatch = useCartActions();
  const { cart, total } = useCart();

  console.log(cart.length);

  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const removeHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };

  if (!cart.length)
    return (
      <Layout>
        <main className="emptyCart">
          <h2>سبد خرید شما خالی است!</h2>
        </main>
      </Layout>
    );

  return (
    <Layout>
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
                    <button onClick={() => removeHandler(item)}>
                      <FaRegTrashAlt />
                    </button>
                    <button>{item.quantity}</button>
                    <button onClick={() => incHandler(item)}>
                      <FaPlus />
                    </button>
                  </div>
                </div>
              );
            })}
          </section>
          <CartSummary total={total} cart={cart} />
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;

const CartSummary = ({ total, cart }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;

  return (
    <section className="cartSummary">
      <h2>جزئیات سفارش</h2>
      <div className="summeryItem">
        <p>قیمت کالا‌ها:</p>
        <p>{originalTotalPrice} تومان</p>
      </div>
      <div className="summeryItem">
        <p>تخفیف کالاها:</p>
        <p>{originalTotalPrice - total} تومان</p>
      </div>
      <div className="summeryItem total">
        <p>جمع کل سبد خرید:</p>
        <p>{total} تومان</p>
      </div>
      <Link to="/checkout">
        <button className="btn primary" style={{ marginTop: "30px" }}>
          ادامه سفارش
        </button>
      </Link>
    </section>
  );
};
