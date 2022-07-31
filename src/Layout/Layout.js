import Navigation from "../components/Navigation";
// import CartProvider from "../Providers/CartProvider";

const Layout = ({ children }) => {
  return (
    // <CartProvider>
      <div>
        <header>
          <Navigation />
        </header>
        {children}
      </div>
    // </CartProvider>
  );
};

export default Layout;
