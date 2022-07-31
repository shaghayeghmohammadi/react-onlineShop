import { NavLink } from "react-router-dom";
import { useCart } from "../Providers/CartProvider";
import "./navigation.css";

const Navigation = () => {
  const { cart } = useCart();
  console.log(cart.length);

  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li className="mainPageLi">
            <NavLink
              to="/"
              className={(Navbutton) =>
                Navbutton.isActive ? "activeLink" : ""
              }
            >
              صفحه اصلی
            </NavLink>
          </li>
          <li className="cartPageNav">
            <NavLink
              to="/cart"
              className={(Navbutton) =>
                Navbutton.isActive ? "activeLink" : ""
              }
            >
              <span className="cartNumber">{cart.length}</span>
              <ion-icon className="cartIcon" name="cart-outline"></ion-icon>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
