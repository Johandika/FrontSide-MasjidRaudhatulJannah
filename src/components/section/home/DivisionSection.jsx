import { kegiatan } from "../../../assets/images";
import styles from "../../../style";
import Button from "../../Button";
import { BsWhatsapp } from "react-icons/bs";

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
    foto: kegiatan,
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
          <div className="flex  overflow-x-auto pb-3  gap-8 justify-start ">
            {divisions.map((division) => (
              <div
                className=" bg-white 
                 relative rounded-lg min-w-[350px] sm:min-w-[350px] "
                key={division.id}>
                <div className="p-3 flex flex-col gap-5">
                  <img
                    src={division.foto}
                    alt="Profile"
                    className="object-cover rounded-t-lg h-40 w-full"
                  />
                  <div className="text-justify">
                    <h1 className="text-3xl font-bold text-greenText text-center">
                      {division.divisi}
                    </h1>
                    <p className="mt-3 text-base"> &emsp;&emsp;{division.body}</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p>Penanggungjawab :</p>
                    <Button outline icon={BsWhatsapp} label={division.pj} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DivisionSection;
