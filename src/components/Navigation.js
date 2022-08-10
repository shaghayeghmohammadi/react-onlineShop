import { NavLink, Link } from "react-router-dom";
import { useCart } from "../Providers/CartProvider";
// import MobileNav from "./mobileNav/MobileNav";
import { FaBars, FaTimes, FaShoppingBasket, FaUser } from "react-icons/fa";
import { useRef } from "react";

import "./navigation.css";

const Navigation = () => {
  const { cart } = useCart();
  console.log(cart.length);

  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("active");
  };

  return (
    <>
      <header className="mainNavigation">
        <div className="logo">
          <button className="nav-btn" onClick={showNav}>
            <FaBars className="react-icon" />
          </button>
          <Link to="/">ShoeLand</Link>
        </div>

        <nav>
          <ul ref={navRef} className="insideMobileNav">
            <button className="nav-btn close" onClick={showNav}>
              <FaTimes className="react-icon" />
            </button>

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
            <li className="checkoutPageLi">
              <NavLink
                to="/checkout"
                className={(Navbutton) =>
                  Navbutton.isActive ? "activeLink" : ""
                }
              >
                صفحه پرداخت
              </NavLink>
            </li>
            <li className="signupPageLi hiddenLi">
              <NavLink
                to="/signup"
                className={(Navbutton) =>
                  Navbutton.isActive ? "activeLink" : ""
                }
              >
                ثبت‌نام
              </NavLink>
            </li>

            <button className="hiddenLi goToCart">
              <Link to="/cart">رفتن به سبد خرید</Link>
            </button>
          </ul>

          <ul className="outsideMobileNav">
            <li className="cartPageNav">
              <NavLink
                to="/cart"
                className={(Navbutton) =>
                  Navbutton.isActive ? "activeLink" : ""
                }
              >
                <span className="cartNumber">{cart.length}</span>
                <FaShoppingBasket className="basketIcon" />
              </NavLink>
            </li>
            <li className="loginPageNav">
              <NavLink
                to="/login"
                className={(Navbutton) =>
                  Navbutton.isActive ? "activeLink" : ""
                }
              >
                <FaUser className="userIcon" />
                <p>ورود</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
