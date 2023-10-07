import { useParams } from "react-router-dom";
import styles from "../style";
import React from "react";
import { kajians } from "./Kajian";

const LinkKajianDetail = () => {
  const { id } = useParams();

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} pt-[60px]`}>
      <div className={`${styles.boxWidth}  my-20 flex flex-col gap-20`}>
        {/* Judul dan Deskripsi */}
        <div className="flex flex-col justify-center items-center text-center gap-9">
          <h1 className="text-judul ">{kajians[id - 1].namaKajian}</h1>
          <p className="w-full sm:w-[90%] md:w-[70%]">
            Disini kamu bisa mencari link kajian yang ada di masjid RJIC
            berdasarkan kategori dan ustad, kajian yang ada di sini adalah
            pengarsipan kajian yang ada di youtube.
          </p>
        </div>

        <div>
          <div className="flex flex-col  text-greenText rounded-lg bg-Gray1 px-6 py-2 ">
            <h1 className="font-bold text-2xl">{kajians[id - 1].namaKajian}</h1>
            <h2 className="font-semibold">{kajians[id - 1].pemateri}</h2>
          </div>
          <div className="flex flex-col  text-neutral-600 ">
            <div className="flex flex-row gap-4 px-6 py-1 items-center">
              <div className="text-sm font-medium">Surat Muhammad 1-5</div>
              <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full outline-1 text-white hover:text-black text-xs">
                Link
              </div>
            </div>
            <div className="flex flex-row gap-4 px-6 py-1 items-center bg-slate-50 ">
              <div className="text-sm font-medium">Surat Muhammad 1-5</div>
              <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full text-white hover:text-black text-xs">
                Link
              </div>
            </div>
            <div className="flex flex-row gap-4 px-6 py-1 items-center">
              <div className="text-sm font-medium">Surat Muhammad 1-5</div>
              <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full text-white hover:text-black text-xs">
                Link
              </div>
            </div>
            <div className="flex flex-row gap-4 px-6 py-1 items-center bg-slate-50 ">
              <div className="text-sm font-medium">Surat Muhammad 1-5</div>
              <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full text-white hover:text-black text-xs">
                Link
              </div>
            </div>
            <div className="flex flex-row gap-4 px-6 py-1 items-center">
              <div className="text-sm font-medium">Surat Muhammad 1-5</div>
              <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full text-white hover:text-black text-xs">
                Link
              </div>
            </div>
            <div className="flex flex-row gap-4 px-6 py-1 items-center bg-slate-50 ">
              <div className="text-sm font-medium">Surat Muhammad 1-5</div>
              <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full text-white hover:text-black text-xs">
                Link
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkKajianDetail;
