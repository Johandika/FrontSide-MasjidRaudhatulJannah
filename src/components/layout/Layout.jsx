import Navbar from "./Navbar";
import NavbarHome from "./NavbarHome";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import styles from "../../style";

const Layout = () => {
  return (
    <div className="w-full ">
      <div className="w-full fixed z-50 ">
        <NavbarHome>
          <Navbar />
        </NavbarHome>
      </div>

      <div className="bg-wite">
        <div>
          <Outlet />
        </div>
      </div>

      <div
        className={`${styles.paddingX} ${styles.flexCenter}  bg-greenBackground`}
      >
        <div className={`${styles.boxWidth}  `}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
