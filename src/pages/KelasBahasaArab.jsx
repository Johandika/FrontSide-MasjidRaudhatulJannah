import styles from "../style";

const KelasBahasaArab = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} pt-[60px] bg-Gray1`}>
      <div className={`${styles.boxWidth}  my-20 flex flex-col gap-20`}>
        {/* Judul dan Deskripsi */}
        <div className="flex flex-col justify-center items-center text-center gap-9">
          <h1 className="text-judul ">Kelas Bahasa Arab</h1>
          <p className="w-full sm:w-[90%] md:w-[70%]">
            Kelas Bahasa Arab yang diselenggarakan di Masjid Raudhatul Jannah Pekanbaru adalah
            sebuah program pendidikan yang bertujuan untuk memberikan wawasan dan pemahaman yang
            mendalam tentang bahasa Arab, salah satu bahasa agung yang memiliki nilai sejarah,
            budaya, dan agama yang sangat penting.
          </p>
        </div>

        <div className="flex flex-1 flex-row">
          <div className="basis-full xs:basis-3/4 sm:basis-1/4 mx-auto  bg-white shadow rounded-md p-5 gap-4 flex flex-col">
            <div className="text-center">
              <div className="text-greenText font-bold text-2xl">Sabtu</div>
            </div>
            <hr />
            <div className="flex flex-row gap-6">
              <div className="flex flex-col flex-1 gap-4">
                <div className="text-greenText font-bold">Ust. Jalaluddin Lc.</div>
                <div className="flex flex-col gap-1">
                  <div className="text-neutral-600 text-sm ">Peserta:</div>
                  <ul className="text-neutral-600 text-base ">
                    <li>1. Roni Irawan</li>
                    <li>2. Deni Santri</li>
                    <li>3. Reza Omna</li>
                    <li>4. Yudi iskandar</li>
                    <li>5. Roni Irawan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KelasBahasaArab;
