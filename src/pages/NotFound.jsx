import { notfound } from "../assets/images";
import styles from "../style";

const NotFound = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}  pt-[30px]`}>
      <div
        className={`${styles.boxWidth}  my-20 flex flex-col gap-7 justify-center items-center`}
      >
        <img
          src={notfound}
          alt="illustration not found"
          className="w-1/2  object-contain"
        />
        <h2 className="text-2xl text-greenText font-bold tracking-wider">
          Halaman tidak ditemukan.
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
