import React, { useEffect, useState } from "react";
import styles from "../style";
import KegiatanTerbaru from "../components/section/kegiatan/KegiatanTerbaru";
import KegiatanList from "../components/section/kegiatan/KegiatanList";
import Button from "../components/Button";
import { HiChevronDoubleRight } from "react-icons/hi";
import { getData } from "../utils/fetch";

const Kegiatan = () => {
  const [active, setActive] = useState("Semua");
  const [divisis, setDivisis] = useState([]);
  const [kegiatans, setKegiatans] = useState([]);
  const [displayedDataKegiatan, setDisplayedDataKegiatan] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const fetchData = async () => {
    try {
      const resDivisi = await getData("/divisi");
      const resKegiatan = await getData("/kegiatan");
      const datasDivisi = resDivisi.data.data;
      const datasKegiatan = resKegiatan.data.data;
      setDivisis(datasDivisi);
      setKegiatans(datasKegiatan);
      setDisplayedDataKegiatan(datasKegiatan.slice(0, itemsPerPage));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Data divisi yang aktif saat ini
  const divisiActive = divisis.filter((divisi) => divisi?.nama === active);

  // Function untuk sort data berdasarkan createdAt terbaru
  const filterDataByLatestCreatedAt = (dataArray) => {
    const arr =
      dataArray &&
      dataArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return arr;
  };

  // Seluruh kegiatan aktif sesuai kategori
  const kegiatansActivePerKategori = filterDataByLatestCreatedAt(
    divisiActive[0]?.Kegiatans
  );

  // Seluruh kegiatan aktif sesuai kategori yang sudah di slice 5 terbaru
  const kegiatansActivePerKategoriSlice = kegiatansActivePerKategori?.slice(5);

  // Load data +10 ketika button di klik
  const loadMoreData = () => {
    setItemsPerPage(itemsPerPage + 10);
    setDisplayedDataKegiatan(
      kegiatansActivePerKategoriSlice &&
        kegiatansActivePerKategoriSlice.slice(0, itemsPerPage + 10)
    );
  };

  // Semua data kegiatan dari semua divisi, data ini untuk opsi filter 'Semua'
  const dataMentahKegiatan = divisis.map((item) => item.Kegiatans).flat();
  const allKegiatansDivisis = filterDataByLatestCreatedAt(dataMentahKegiatan);

  // Find nama divisi dari kegiatan tunggal yang ada untuk di tampilkan di divisi 'Semua'
  const namaDivisi = divisis.find(
    (divisi) => divisi.id === allKegiatansDivisis[0].DivisiId
  );

  return (
    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-white rounded-t-[4rem]`}
    >
      <div className={`${styles.boxWidth} flex flex-col gap-20 `}>
        <div className={`mt-[62px] mb-48 flex flex-row w-full`}>
          <div className=" flex flex-row flex-1 flex-wrap min-w-fit">
            <div className=" basis-1/2 sm:basis-1/4 md:basis-1/6  text-center border-t-[4px] border-b-[1px] border-greenBackground ">
              <div
                className={`py-2 ${active === "Semua" && " bg-neutral-100"}`}
              >
                <div
                  className={` py-2 text-sm text-black cursor-pointer border-Gray1 border-r-2
                    ${
                      active === "Semua"
                        ? "text-greenText font-bold"
                        : "font-semibold"
                    }
                     `}
                  onClick={() => setActive("Semua")}
                >
                  Semua
                </div>
              </div>
            </div>
            {divisis.map((divisi, index) => (
              <React.Fragment key={divisi?.id}>
                <div className=" basis-1/2 sm:basis-1/4 md:basis-1/6  text-center border-t-[4px] border-b-[1px] border-greenBackground ">
                  <div
                    className={`py-2 ${
                      active === divisi?.nama && " bg-neutral-100"
                    }`}
                  >
                    <div
                      className={` py-2 text-sm text-black cursor-pointer border-Gray1 
                    ${index === divisis?.length - 1 ? "" : "border-r-2"}
                    ${
                      active === divisi?.nama
                        ? "text-greenText font-bold"
                        : "font-semibold"
                    }
                     `}
                      onClick={() => setActive(divisi?.nama)}
                    >
                      {divisi?.nama}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}

            <div className="w-full">
              <div className="mt-10 flex flex-col gap-5">
                <div className="border-l-2 border-red-500 uppercase pl-3 font-bold text-black ">
                  Terbaru
                </div>
                <KegiatanTerbaru
                  active={active}
                  kegiatans={kegiatans}
                  divisis={divisis}
                  allKegiatansDivisis={allKegiatansDivisis}
                  namaDivisi={namaDivisi}
                />

                <KegiatanList
                  active={active}
                  itemsPerPage={itemsPerPage}
                  kegiatans={displayedDataKegiatan}
                  divisis={divisis}
                  kegiatansActivePerKategori={kegiatansActivePerKategoriSlice}
                  allKegiatansDivisis={allKegiatansDivisis}
                />
              </div>
            </div>

            {/* Button hanya akan di tampilkan ketika data ada */}
            {active === "Semua" ? (
              allKegiatansDivisis &&
              (allKegiatansDivisis.slice(0, allKegiatansDivisis.length - 5)
                .length > 0 ? (
                <div className="mx-auto mt-14">
                  <Button
                    label={"Lihat lebih banyak"}
                    iconRight={HiChevronDoubleRight}
                    className={"px-8"}
                    onClick={loadMoreData}
                  />
                </div>
              ) : (
                <div className="flex w-full h-64 bg-neutral-200 justify-center items-center text-4xl font-bold text-neutral-400 rounded-md">
                  Tidak ada data
                </div>
              ))
            ) : kegiatansActivePerKategoriSlice &&
              kegiatansActivePerKategoriSlice.slice(
                0,
                kegiatansActivePerKategoriSlice.length - 5
              ).length > 0 ? (
              <div className="mx-auto mt-14">
                <Button
                  label={"Lihat lebih banyak"}
                  iconRight={HiChevronDoubleRight}
                  className={"px-8"}
                  onClick={loadMoreData}
                />
              </div>
            ) : (
              <div className="flex w-full h-64 bg-neutral-200 justify-center items-center text-4xl font-bold text-neutral-400 rounded-md">
                Tidak ada data
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kegiatan;
