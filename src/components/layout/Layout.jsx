import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import styles from "../../style";
const Layout = () => {
  return (
    <div className="w-full">
      <div className="w-full fixed bg-white z-20">
        <Navbar />
      </div>

      <div className="bg-wite">
        <div>
          <Outlet />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}  bg-greenBackground`}>
        <div className={`${styles.boxWidth}  `}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
