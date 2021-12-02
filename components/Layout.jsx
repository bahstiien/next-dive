import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, name }) => {
  return (
    <div>
      <Header name={name} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
