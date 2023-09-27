import { kegiatan, profile } from "../../../assets/icons";
import styles from "../../../style";
import Button from "../../Button";
import { BsWhatsapp } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";

const divisions = [
  {
    id: 1,
    divisi: "Divisi Dakwah",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint repudiandae tenetur excepturi accusamus? Ab aliquam esse sint harum beatae ex animi maiores. Recusandae quia repellendus itaque dolorem corporis fugit sequi laboriosam eaque, alias magni ducimus sint est. Culpa, atque.",
    pj: "Nurhadi Akabr",
    foto: kegiatan,
    kontak: "+62 82378789098",
  },
  {
    id: 2,
    divisi: "Divisi Dakwah",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint repudiandae tenetur excepturi accusamus? Ab aliquam esse sint harum beatae ex animi maiores. Recusandae quia repellendus itaque dolorem corporis fugit sequi laboriosam eaque, alias magni ducimus sint est. Culpa, atque.",
    pj: "Nurhadi Akabr",
    foto: profile,
    kontak: "+62 82378789098",
  },
  {
    id: 3,
    divisi: "Divisi Dakwah",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint repudiandae tenetur excepturi accusamus? Ab aliquam esse sint harum beatae ex animi maiores. Recusandae quia repellendus itaque dolorem corporis fugit sequi laboriosam eaque, alias magni ducimus sint est. Culpa, atque.",
    pj: "Nurhadi Akabr",
    foto: kegiatan,
    kontak: "+62 82378789098",
  },
  {
    id: 4,
    divisi: "Divisi Dakwah",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint repudiandae tenetur excepturi accusamus? Ab aliquam esse sint harum beatae ex animi maiores. Recusandae quia repellendus itaque dolorem corporis fugit sequi laboriosam eaque, alias magni ducimus sint est. Culpa, atque.",
    pj: "Nurhadi Akabr",
    foto: kegiatan,
    kontak: "+62 82378789098",
  },
  {
    id: 5,
    divisi: "Divisi Dakwah",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint repudiandae tenetur excepturi accusamus? Ab aliquam esse sint harum beatae ex animi maiores. Recusandae quia repellendus itaque dolorem corporis fugit sequi laboriosam eaque, alias magni ducimus sint est. Culpa, atque.",
    pj: "Nurhadi Akabr",
    foto: kegiatan,
    kontak: "+62 82378789098",
  },
  {
    id: 6,
    divisi: "Divisi Dakwah",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint repudiandae tenetur excepturi accusamus? Ab aliquam esse sint harum beatae ex animi maiores. Recusandae quia repellendus itaque dolorem corporis fugit sequi laboriosam eaque, alias magni ducimus sint est. Culpa, atque.",
    pj: "Nurhadi Akabr",
    foto: kegiatan,
    kontak: "+62 82378789098",
  },
];

const DivisionSection = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-Gray2 rounded-t-[4rem] -mt-14`}>
        <div className={`${styles.boxWidth}  mt-40 mb-48 flex flex-col gap-20 `}>
          <h1 className="text-judul ">Divisi RJIC</h1>
          <div className="flex flex-wrap gap-5 justify-center">
            {divisions.map((division) => (
              <div
                className=" bg-white min-h-[350px] sm:min-h-[500px] w-full sm:w-[48%] md:w-[32%]  relative rounded-lg overflow-hidden "
                key={division.id}>
                <div className="p-4 flex flex-col gap-8">
                  <img
                    src={division.foto}
                    alt="Profile"
                    className="object-cover rounded-lg h-72 w-full"
                  />
                  <div className="text-justify">
                    <h1 className="text-3xl font-bold text-greenText">{division.divisi}</h1>
                    <p className="mt-3"> &emsp;&emsp;{division.body}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button outline icon={FaRegUser} label={`${division.pj} (PJ)`} />
                    <Button outline icon={BsWhatsapp} label={division.kontak} />
                  </div>
                </div>
                {/* <div className="absolute bottom-7 left-0 right-0 text-left pl-4 text-white ">
                  <h1 className="text-4xl font-bold mb-1">{division.nama}</h1>
                  <p className="font-base">{division.jabatan}</p>
                </div> */}
                {/* {(index + 1) % 3 === 0 && <div className="w-full"></div>} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DivisionSection;
