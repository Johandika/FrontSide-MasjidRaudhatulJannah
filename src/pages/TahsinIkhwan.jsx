import styles from "../style";

const TahsinIkhwan = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} pt-[60px] bg-Gray1`}>
      <div className={`${styles.boxWidth}  my-20 flex flex-col gap-20`}>
        {/* Judul dan Deskripsi */}
        <div className="flex flex-col justify-center items-center text-center gap-9">
          <h1 className="text-judul ">Jadwal Tahsin Ikhwan</h1>
          <p className="w-full sm:w-[90%] md:w-[70%]">
            Tahsin ikhwan adalah program tahsin yang dimiliki oleh RJIC untuk peserta tahsin
            laki-laki dewasa.
          </p>
        </div>
        <div className="grid grid-cols-4 ">
          <div className="bg-white shadow rounded-md p-5">asdf</div>
          <div>adsfa</div>
          <div>asdfa</div>
          <div>asdf</div>
        </div>
      </div>
    </div>
  );
};

export default TahsinIkhwan;
