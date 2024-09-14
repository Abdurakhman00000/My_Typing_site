import HomePage from "../pages/HomePage";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./LayoutSite.module.scss";

const LayoutSite = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <HomePage/>
      </main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
