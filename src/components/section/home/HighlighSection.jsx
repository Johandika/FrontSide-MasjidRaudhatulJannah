import { pohonpahala } from "../../../assets/images";
import styles from "../../../style";
import SwiperHome from "../../swiper/SwiperHome";

const HighlighSection = () => {
  return (
    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-white rounded-t-[4rem] -mt-14`}
    >
      <div className={`${styles.boxWidth}  mt-40 mb-48 flex flex-col gap-20 `}>
        <h1 className="text-judul ">Highlight Kegiatan</h1>
        <SwiperHome />
      </div>
    </div>
  );
};

export default HighlighSection;
