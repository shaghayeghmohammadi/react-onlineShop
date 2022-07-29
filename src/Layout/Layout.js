import Navigation from "../components/Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      {children}
    </div>
  );
};

export default Layout;
