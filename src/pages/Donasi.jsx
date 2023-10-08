import { useEffect, useState } from "react";
import { getData } from "../utils/fetch";
import { bsilogo } from "../assets/images";
import styles from "../style";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import { config } from "../configs";

function Card({ title, logo, number, index, about }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="border-y relative  ">
      <button
        className="bg-white p-4 flex flex-col sm:flex-row  items-start sm:items-center w-full font-bold text-2xl text-greenText relative "
        type="button"
        aria-expanded={active}
        onClick={handleClick}
      >
        <div className="w-fit sm:w-[560px] flex justify-start text-start">
          {index + 1}. {title}
        </div>
        <div className="flex items-center w-[380px] gap-4 sm:gap-0 ">
          <img
            src={logo}
            alt="Logo"
            className="h-10 sm:h-12 "
          />
          <p className="ml-0 sm:ml-5 text-xl sm:text-xl  text-gray-500">
            {number}
          </p>
        </div>
        {/* Web Icon Layout */}
        {active ? (
          <FiChevronUp
            size={24}
            className="hidden sm:flex ml-auto"
          />
        ) : (
          <FiChevronDown
            size={24}
            className="hidden sm:flex ml-auto"
          />
        )}
        {/* Mobile Icon Layout */}
        {active ? (
          <FiChevronUp
            size={24}
            className="sm:hidden absolute top-1/2 transform -translate-y-1/2 right-0"
          />
        ) : (
          <FiChevronDown
            size={24}
            className="sm:hidden absolute top-1/2 transform -translate-y-1/2 right-0"
          />
        )}
      </button>
      {active && <div className=" bg-gray-100 p-4">{about}</div>}
    </div>
  );
}

const Donasi = () => {
  const [rekeningData, setRekeningData] = useState([]);

  const fetchRekeningDonasi = async () => {
    try {
      const res = await getData("/rekening");
      const datas = res.data.data;
      setRekeningData(datas); // Setel state rekeningData dengan data dari server
    } catch (error) {
      // Handle error jika ada
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchRekeningDonasi();
  }, []);

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} pt-[60px]`}>
      <div className={`${styles.boxWidth}  my-20 flex flex-col gap-20`}>
        {/* Judul dan Deskripsi */}
        <div className="flex flex-col justify-center items-center text-center gap-9">
          <h1 className="text-judul ">Donasi</h1>
          <p className="w-full sm:w-[90%] md:w-[70%]">
            Untuk memudahkan para jama'ah melakukan donasi, kami membuat daftar
            rekening donasi dari masing masing kebutuhan sehingga jama'ah lebih
            leluasa memilih program mana yang akan di berikan donasi.
          </p>
        </div>

        <div className="flex flex-col w-11/12 mx-auto ">
          {rekeningData.map((item, index) => (
            <Card
              key={item.id}
              index={index}
              title={item.atas_nama}
              logo={bsilogo}
              number={item.nomor_rekening}
              about={item.catatan}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donasi;
