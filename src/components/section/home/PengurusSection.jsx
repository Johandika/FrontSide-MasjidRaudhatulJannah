import { profile } from "../../../assets/images";
import styles from "../../../style";

const pengurus = [
  {
    id: 1,
    nama: "Dadang Mulyadi",
    jabatan: "Ketua Yayasan",
    foto: profile,
  },
  {
    id: 2,

    nama: "Dadang Mulyadi",
    jabatan: "Ketua Yayasan",
    foto: profile,
  },
  {
    id: 3,
    nama: "Dadang Mulyadi",
    jabatan: "Ketua Yayasan",
    foto: profile,
  },
];

const PengurusSection = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-Gray1 rounded-t-[4rem]  `}>
        <div className={`${styles.boxWidth}  mt-40 mb-48 flex flex-col gap-20 `}>
          <h1 className="text-judul ">Pengurus</h1>
          <div className="flex flex-wrap gap-10 justify-center">
            {pengurus.map((person) => (
              <div
                className=" bg-blue-300 w-full sm:w-[30%] relative rounded-lg overflow-hidden"
                key={person.id}>
                <img
                  src={person.foto}
                  alt="Profile"
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                />
                <div className="absolute bottom-7 left-0 right-0 text-left pl-4 text-white ">
                  <h1 className="text-4xl font-bold mb-1">{person.nama}</h1>
                  <p className="font-base">{person.jabatan}</p>
                </div>
                {/* {(index + 1) % 3 === 0 && <div className="w-full"></div>} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PengurusSection;
