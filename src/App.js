import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
// import Layout from "./Layout/Layout";
import CartProvider from "./Providers/CartProvider";
function App() {
  return (
    <BrowserRouter>
      {/* <Layout> */}
        <CartProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </CartProvider>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
