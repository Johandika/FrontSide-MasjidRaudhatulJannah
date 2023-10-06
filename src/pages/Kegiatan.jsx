import React, { useState } from "react";
import styles from "../style";
import KegiatanTerbaru from "../components/section/kegiatan/KegiatanTerbaru";
import KegiatanList from "../components/section/kegiatan/KegiatanList";
import Button from "../components/Button";
import { HiChevronDoubleRight } from "react-icons/hi";

const divisions = [
  { id: 1, title: "Semua Divisi", content: "Isi Card 1" },
  { id: 2, title: "Divisi Dakwah", content: "Isi Card 2" },
  { id: 3, title: "Divisi Sosial", content: "Isi Card 3" },
  { id: 4, title: "Divisi Media", content: "Isi Card 4" },
  { id: 5, title: "Divisi Sekretariat", content: "Isi Card 5" },
  { id: 6, title: "Divisi Cheetah", content: "Isi Card 6" },
];

const Kegiatan = () => {
  const [active, setActive] = useState(1);

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-white rounded-t-[4rem]`}>
      <div className={`${styles.boxWidth} flex flex-col gap-20 `}>
        <div className={`mt-[62px] mb-48 flex flex-row w-full`}>
          <div className=" flex flex-row flex-1 flex-wrap min-w-fit">
            {divisions.map((division, index) => (
              <React.Fragment key={division.id}>
                <div className=" basis-1/2 sm:basis-1/4 md:basis-1/6  text-center border-t-[4px] border-b-[1px] border-greenBackground ">
                  <div className={`py-2 ${active === division.id && " bg-neutral-100"}`}>
                    <div
                      className={` py-2 text-sm text-black cursor-pointer border-Gray1 
                    ${index === divisions.length - 1 ? "" : "border-r-2"}
                    ${active === division.id ? "text-greenText font-bold" : "font-semibold"}
                     `}
                      onClick={() => setActive(division.id)}>
                      {division.title}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}

            {divisions.map((division) => (
              <div key={division.id} className="w-full">
                {division.id === active && (
                  <div className="mt-10 flex flex-col gap-5">
                    <div className="border-l-2 border-red-500 uppercase pl-3 font-bold text-black ">
                      Terbaru
                    </div>
                    <KegiatanTerbaru division={division} divisions={divisions} />
                    <div className="border-l-2 border-red-500 uppercase pl-3 font-bold text-black mt-10">
                      {division.title}
                    </div>
                    <KegiatanList division={division} divisions={divisions} />
                  </div>
                )}
              </div>
            ))}

            <div className="mx-auto mt-14">
              <Button
                label={"Lihat lebih banyak"}
                iconRight={HiChevronDoubleRight}
                className={"px-8"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kegiatan;
