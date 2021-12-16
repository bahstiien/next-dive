import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children, name }) => {
  return (
    <div>
      <Header name={name} />
      <h1 className="text-2xl mt-8 mb-4 uppercase text-gray-700"> {name}</h1>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
