import * as data from "../data/data";
import { useCartActions } from "../Providers/CartProvider";
const HomePage = () => {
  const dispatch = useCartActions();

  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
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
                افزودن به سبد خرید
              </button>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;
