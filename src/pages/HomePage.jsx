import * as data from "../data/data";
import { useCart, useCartActions } from "../Providers/CartProvider";
import Layout from "../Layout/Layout";
import { checkInCart } from "../utils/checkInCart";
import { toast } from "react-toastify";

const HomePage = () => {
  const { cart } = useCart();
  const dispatch = useCartActions();

  const addProductHandler = (product) => {
    toast.success(`${product.name} به سبد خرید اضافه شد !`);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Layout>
      <main className="container">
        <section className="productList">
          {data.products.map((product) => {
            return (
              <section key={product.id} className="singleProduct">
                <div className="productImage">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="productDesc">
                  <p>{product.name}</p>
                  <p>{product.price}تومان</p>
                </div>
                <button
                  onClick={() => addProductHandler(product)}
                  className="btn primary"
                >
                  {checkInCart(cart, product)
                    ? "ادامه سفارش"
                    : "افزودن به سبد خرید"}
                </button>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
