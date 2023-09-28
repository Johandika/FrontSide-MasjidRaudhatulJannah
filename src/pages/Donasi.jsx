import { useState } from "react";
import { bsilogo } from "../assets/images";
import styles from "../style";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const rekDonasi = [
  {
    id: 1,
    atasNama: "RJIC Masjid",
    tujuanRek: "Donasi Iftar Ramadhan",
    noRek: "7175507072",
    bank: "BSI",
    bankLogo: bsilogo,
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quisquam hic aliquam optio rem tempore ipsa reiciendis iste quidem consectetur minus consequatur impedit, amet corrupti architecto dolore quas, magni eligendi!",
  },
  {
    id: 2,
    atasNama: "RJIC Masjid",
    tujuanRek: "Donasi Iftar Ramadhan",
    noRek: "7175507072",
    bank: "BSI",
    bankLogo: bsilogo,
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quisquam hic aliquam optio rem tempore ipsa reiciendis iste quidem consectetur minus consequatur impedit, amet corrupti architecto dolore quas, magni eligendi!",
  },
  {
    id: 3,
    atasNama: "RJIC Masjid",
    tujuanRek: "Donasi Iftar Ramadhan",
    noRek: "7175507072",
    bank: "BSI",
    bankLogo: bsilogo,
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quisquam hic aliquam optio rem tempore ipsa reiciendis iste quidem consectetur minus consequatur impedit, amet corrupti architecto dolore quas, magni eligendi!",
  },
];

function Card({ title, logo, number, index, about }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="border-y relative ">
      <button
        className="bg-white p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full font-bold text-2xl text-greenText relative "
        type="button"
        aria-expanded={active}
        onClick={handleClick}
      >
        <div>
          {index + 1}. {title}
        </div>
        <div className="flex items-center gap-4 sm:gap-0">
          <img
            src={logo}
            alt="Logo"
            className="h-10 sm:h-12 "
          />
          <p className="ml-0 sm:ml-5 text-xl sm:text-2xl text-blue-600">
            {" "}
            {number}
          </p>
        </div>
        {active ? (
          <FiChevronUp
            size={24}
            className="hidden sm:flex"
          />
        ) : (
          <FiChevronDown
            size={24}
            className="hidden sm:flex"
          />
        )}
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
      {active && <div className="accordion-body bg-gray-100 p-4">{about}</div>}
    </div>
  );
}

const Donasi = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} pt-[60px]`}>
      <div className={`${styles.boxWidth}  my-20 flex flex-col gap-20`}>
        {/* Judul dan Deskripsi */}
        <div className="flex flex-col justify-center items-center text-center gap-9">
          <h1 className="text-judul ">Sejarah RJIC</h1>
          <p className="w-full sm:w-[90%] md:w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            eaque possimus ipsa ipsum cumque nihil quas voluptates quae.
            Reprehenderit, animi!
          </p>
        </div>

        <div className="flex flex-col  ">
          {rekDonasi.map((item, index) => (
            <Card
              index={index}
              key={item.id}
              title={item.atasNama}
              logo={item.bankLogo}
              number={item.noRek}
              about={item.about}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donasi;
