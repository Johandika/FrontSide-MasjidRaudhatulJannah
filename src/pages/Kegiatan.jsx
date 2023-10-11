import React, { useEffect, useState } from "react";
import styles from "../style";
import KegiatanTerbaru from "../components/section/kegiatan/KegiatanTerbaru";
import KegiatanList from "../components/section/kegiatan/KegiatanList";
import Button from "../components/Button";
import { HiChevronDoubleRight } from "react-icons/hi";
import { getData } from "../utils/fetch";

// const divisions = [
//   { id: 1, title: "Semua Divisi", content: "Isi Card 1" },
//   { id: 2, title: "Divisi Dakwah", content: "Isi Card 2" },
//   { id: 3, title: "Divisi Sosial", content: "Isi Card 3" },
//   { id: 4, title: "Divisi Media", content: "Isi Card 4" },
// ];

const Kegiatan = () => {
  const [active, setActive] = useState("semua");
  const [dataDivisi, setDataDivisi] = useState([]);
  const [dataKegiatan, setDataKegiatan] = useState([]);

  const fetchData = async () => {
    try {
      const resDivisi = await getData("/divisi");
      const resKegiatan = await getData("/kegiatan");
      const datasDivisi = resDivisi.data.data;
      const datasKegiatan = resKegiatan.data.data;
      setDataDivisi(datasDivisi);
      setDataKegiatan(datasKegiatan);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-white rounded-t-[4rem]`}
    >
      <div className={`${styles.boxWidth} flex flex-col gap-20 `}>
        <div className={`mt-[62px] mb-48 flex flex-row w-full`}>
          <div className=" flex flex-row flex-1 flex-wrap min-w-fit">
            <div className=" basis-1/2 sm:basis-1/4 md:basis-1/6  text-center border-t-[4px] border-b-[1px] border-greenBackground ">
              <div className={`py-2 ${active === 0 && " bg-neutral-100"}`}>
                <div
                  className={` py-2 text-sm text-black cursor-pointer border-Gray1 border-r-2
                    ${
                      active === "semua"
                        ? "text-greenText font-bold"
                        : "font-semibold"
                    }`}
                  onClick={() => setActive("semua")}
                >
                  Semua
                </div>
              </div>
            </div>

            {dataDivisi.map((divisi, index) => (
              <React.Fragment key={divisi?.id}>
                <div className=" basis-1/2 sm:basis-1/4 md:basis-1/6  text-center border-t-[4px] border-b-[1px] border-greenBackground ">
                  <div
                    className={`py-2 ${
                      active === divisi?.id && " bg-neutral-100"
                    }`}
                  >
                    <div
                      className={` py-2 text-sm text-black cursor-pointer border-Gray1 
                    ${index === dataDivisi?.length - 1 ? "" : "border-r-2"}
                    ${
                      active === divisi?.id
                        ? "text-greenText font-bold"
                        : "font-semibold"
                    }
                     `}
                      onClick={() => setActive(divisi?.id)}
                    >
                      {divisi?.nama}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            {/* {console.log("active")}
            {console.log(active)} */}

            {dataKegiatan.map((kegiatan, index) => (
              <div
                key={kegiatan.id}
                className="w-full"
              >
                {kegiatan.DivisiId === active && (
                  <div className="mt-10 flex flex-col gap-5">
                    <div className="border-l-2 border-red-500 uppercase pl-3 font-bold text-black ">
                      Terbaru
                    </div>
                    <KegiatanTerbaru
                      kegiatan={kegiatan}
                      dataKegiatan={dataKegiatan}
                      dataDivisi={dataDivisi}
                    />
                    <div className="border-l-2 border-red-500 uppercase pl-3 font-bold text-black mt-10">
                      {kegiatan?.nama}
                    </div>
                    {/* <KegiatanList
                      data={data}
                      dataKegiatan={dataKegiatan}
                    /> */}
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
