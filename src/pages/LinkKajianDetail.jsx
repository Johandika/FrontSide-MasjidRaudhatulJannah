import { Link, useParams } from "react-router-dom";
import styles from "../style";
// import { kajians } from "./Kajian";
import { getData } from "../utils/fetch";
import { useEffect, useState } from "react";
import { formatTanggalFullAngka } from "../utils/dateFormat";

const LinkKajianDetail = () => {
  const { id } = useParams();
  const [datasKajian, setDatasKajian] = useState([]);
  const [datasLinkKajian, setDatasLinkKajian] = useState([]);

  const fetchLinkKajian = async () => {
    try {
      const res = await getData("/kajian/rutin");
      const res2 = await getData("/linkKajian");
      const datas = res.data.data;
      const datas2 = res2.data.data;
      setDatasKajian(datas);
      setDatasLinkKajian(datas2);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const dataKajian = datasKajian.find((kajian) => kajian.id === id);
  const datasLinkKajianFilter = datasLinkKajian.filter(
    (kajian) => kajian.KajianId === dataKajian?.Jadwal.KajianId
  );

  console.log("datasLinkKajianFilter", datasLinkKajianFilter);
  // console.log(dataKajian?.Jadwal.KajianId);

  useEffect(() => {
    fetchLinkKajian();
  }, []);

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} pt-[60px]`}>
      <div className={`${styles.boxWidth}  my-20 flex flex-col gap-20`}>
        {/* Judul dan Deskripsi */}
        <div className="flex flex-col justify-center items-center text-center gap-9">
          <h1 className="text-judul ">{dataKajian?.tema}</h1>
          <p className="w-full sm:w-[90%] md:w-[70%]">
            {dataKajian?.informasi}
          </p>
        </div>

        <div>
          <div className="flex flex-col  text-greenText rounded-t-lg bg-Gray1 px-6 py-2 ">
            <h1 className="font-bold text-2xl">{dataKajian?.tema}</h1>
            <h2 className="font-semibold">Ustd. {dataKajian?.Ustadz.nama}</h2>
          </div>
          <div className="flex flex-col  text-neutral-600">
            {datasLinkKajianFilter.map((kajian, index) => (
              <div
                key={kajian.id}
                className={`flex flex-row gap-4 px-6 py-2 items-center ${
                  index % 2 === 1 ? "bg-slate-100" : ""
                }`}
              >
                <div className="text-sm font-medium">
                  {index + 1}. {kajian.sub_tema}
                </div>
                <button className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full outline-1 text-white hover:text-black text-xs">
                  <Link to={kajian.link_kajian}>Link</Link>
                </button>
                <div className="ml-auto font-normal text-xs text-gray-500">
                  {formatTanggalFullAngka(kajian.createdAt)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkKajianDetail;
