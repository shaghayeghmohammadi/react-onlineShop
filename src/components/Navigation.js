import { NavLink, Link } from "react-router-dom";
import { useCart } from "../Providers/CartProvider";
import MyLogo from "../assets/images/logo.png";
import {
  BiMenuAltRight,
  BiX,
  BiCartAlt,
  BiLogIn,
  BiUser,
} from "react-icons/bi";
import { useRef } from "react";

import "./navigation.css";
import { useAuth } from "../Providers/AuthProvider";

const Navigation = () => {
  const { cart } = useCart();
  console.log(cart.length);

  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("active");
  };

  const userData = useAuth();

  return (
    <>
      <header className="mainNavigation">
        <div className="logo">
          <button className="nav-btn" onClick={showNav}>
            <BiMenuAltRight className="menu" />
          </button>
          <Link to="/">
            <img className="my-logo" src={MyLogo} alt="logo" />
          </Link>
        </div>

        <nav>
          <ul ref={navRef} className="insideMobileNav">
            <button className="nav-btn close" onClick={showNav}>
              <BiX className="react-icon" />
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
                <BiCartAlt className="basketIcon" />
              </NavLink>
            </li>
            <li className="loginPageNav">
              <NavLink
                to={userData ? "/profile" : "/login"}
                className={(Navbutton) =>
                  Navbutton.isActive ? "activeLink" : ""
                }
              >
                <BiLogIn className="userIcon" />
                {userData ? <BiUser /> : <p>ورود</p>}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
