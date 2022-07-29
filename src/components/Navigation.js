import { NavLink } from "react-router-dom";
import "./navigation.css";
const Navigation = () => {
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(Navbutton) =>
                Navbutton.isActive ? "activeLink" : ""
              }
            >
              صفحه اصلی
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={(Navbutton) =>
                Navbutton.isActive ? "activeLink" : ""
              }
            >
              سبد خرید
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
