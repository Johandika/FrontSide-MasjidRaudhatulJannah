import formatTanggal from "../../../utils/dateFormat";
import formatPathGambar from "../../../utils/formatGambar";
import { config } from "../../../configs";

const KegiatanList = ({
  active,
  kegiatansActivePerKategori,
  itemsPerPage,
  allKegiatansDivisis,
  divisis,
}) => {
  const namaDivisi2 = (parameter) =>
    divisis.find((divisi) => divisi.id === parameter);

  // console.log("NAMA DIVISI", namaDivisi);
  return (
    <div className="mt-10 flex flex-col gap-5">
      <div className="border-l-2 border-red-500 uppercase pl-3 font-bold text-black mt-4">
        {active}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-black">
        {active === "Semua"
          ? allKegiatansDivisis
              .slice(5)
              .slice(0, itemsPerPage)
              .map((kegiatan, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-md overflow-hidden cursor-pointer group transition hover:shadow-neutral-300 flex justify-between flex-col"
                >
                  <div className="overflow-hidden bg-black">
                    <img
                      src={`${config.api_image}/${formatPathGambar(
                        kegiatan.gambar_kegiatan
                      )}`}
                      alt={kegiatan.tema}
                      className="w-full h-[150px] object-cover group-hover:scale-105 transition group-hover:duration-700 "
                    />
                  </div>
                  <div className="px-3 pt-3 group-hover:text-greenText">
                    <h1 className="text-lg font-bold  mb-2 ">
                      {kegiatan.tema}
                    </h1>
                  </div>
                  <div className="flex flex-row  justify-between text-xs mt-auto px-3 pb-3 group-hover:text-greenText">
                    <div className=" pl-2 border-l-2 border-red-500 uppercase">
                      {namaDivisi2(kegiatan.DivisiId).nama}
                    </div>
                    <div className="">{formatTanggal(kegiatan.createdAt)}</div>
                  </div>
                </div>
              ))
          : kegiatansActivePerKategori &&
            kegiatansActivePerKategori
              .slice(0, itemsPerPage)
              .map((kegiatan, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-md overflow-hidden cursor-pointer group transition hover:shadow-neutral-300 flex justify-between flex-col"
                >
                  <div className="overflow-hidden bg-black">
                    <img
                      src={`${config.api_image}/${formatPathGambar(
                        kegiatan.gambar_kegiatan
                      )}`}
                      alt={kegiatan.tema}
                      className="w-full h-[150px] object-cover group-hover:scale-105 transition group-hover:duration-700 "
                    />
                  </div>
                  <div className="px-3 pt-3 group-hover:text-greenText">
                    <h1 className="text-lg font-bold  mb-2 ">
                      {kegiatan.tema}
                    </h1>
                  </div>
                  <div className="flex flex-row  justify-between text-xs mt-auto px-3 pb-3 group-hover:text-greenText">
                    <div className=" pl-2 border-l-2 border-red-500 uppercase">
                      {active}
                    </div>
                    <div> {formatTanggal(kegiatan.createdAt)}</div>
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
};

export default KegiatanList;
