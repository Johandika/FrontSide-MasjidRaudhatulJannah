// import { formatTanggal } from "../../../utils/dateFormat";
import { config } from "../../../configs";
import formatTanggal from "../../../utils/dateFormat";
import formatPathGambar from "../../../utils/formatGambar";

const KegiatanTerbaru = ({
  active,
  kegiatans,
  divisis,
  allKegiatansDivisis,
  namaDivisi,
}) => {
  // Divisi yang aktif saat ini
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

  // Mengambil kegiatan aktif yang terakhir di upload
  const kegiatanActiveIdTerbaru =
    kegiatansActivePerKategori && kegiatansActivePerKategori[0]?.id;

  const dataKegiatanTerbaru = kegiatans.find(
    (kegiatan) => kegiatan.id === kegiatanActiveIdTerbaru
  );

  return (
    <div
      className={` flex flex-col lg:flex-row h-full lg:h-[400px] w-full gap-4 `}
    >
      {/* Ambil 1 data terbaru */}
      {allKegiatansDivisis[0] ? (
        <div className=" lg:basis-1/2  w-full">
          <div className=" h-full w-full relative overflow-hidden rounded-md cursor-pointer hover:shadow-neutral-400 shadow-md group transition">
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent z-10"></div>
            <div className="absolute flex flex-col bottom-3 right-3 left-3 bg">
              <h1 className="text-3xl font-bold text-white mb-2 z-10">
                {active === "Semua"
                  ? allKegiatansDivisis[0]?.tema
                  : dataKegiatanTerbaru?.tema}
              </h1>
              <div className="flex flex-row text-white justify-between text-sm z-10">
                <div className=" pl-2 border-l-2 border-red-500 uppercase">
                  {active === "Semua"
                    ? namaDivisi?.nama
                    : divisiActive[0]?.nama}
                </div>
                <div>{formatTanggal(dataKegiatanTerbaru?.createdAt)}</div>
              </div>
            </div>
            <img
              src={
                active === "Semua"
                  ? `${config.api_image}/${formatPathGambar(
                      allKegiatansDivisis[0]?.gambar_kegiatan
                    )}`
                  : `${config.api_image}/${formatPathGambar(
                      dataKegiatanTerbaru?.gambar_kegiatan
                    )}`
              }
              alt={
                active === "Semua"
                  ? allKegiatansDivisis[0]?.tema
                  : dataKegiatanTerbaru?.tema
              }
              className="w-full h-[400px] object-center object-cover group-hover:scale-105 transition group-hover:duration-700 "
            />
          </div>
        </div>
      ) : (
        <div className=" lg:basis-1/2  w-full">
          <div className=" flex w-full h-40 md:h-full bg-neutral-200 justify-center items-center text-4xl font-bold text-neutral-400 rounded-md">
            Tidak ada data
          </div>
        </div>
      )}

      {allKegiatansDivisis[0] ? (
        <div className="basis-full lg:basis-1/2 flex ">
          <div className="w-full h-full grid grid-cols-1 xs:grid-cols-2 gap-4">
            {/* Looping Card  */}
            {active === "Semua"
              ? allKegiatansDivisis.slice(1, 5).map((kegiatan) => (
                  <div
                    className="shadow-md hover:shadow-neutral-400 relative bg-orange-200 overflow-hidden rounded-md cursor-pointer group transition "
                    key={kegiatan.id}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent z-10 "></div>
                    <div className="absolute flex flex-col bottom-2 right-3 left-3 z-10">
                      <h1 className="text-lg font-bold text-white mb-2">
                        {kegiatan.tema}
                      </h1>
                      <div className="flex flex-row text-white justify-between text-xs">
                        <div className=" pl-2 border-l-2 border-red-500 uppercase">
                          {namaDivisi.nama}
                        </div>
                        <div className="">
                          {formatTanggal(kegiatan.createdAt)}
                        </div>
                      </div>
                    </div>

                    <img
                      src={
                        active === "Semua"
                          ? `${config.api_image}/${formatPathGambar(
                              allKegiatansDivisis[0].gambar_kegiatan
                            )}`
                          : `${config.api_image}/${formatPathGambar(
                              kegiatan.gambar_kegiatan
                            )}`
                      }
                      alt={kegiatan.tema}
                      className="h-full w-full object-cover group-hover:scale-105 transition group-hover:duration-700"
                    />
                  </div>
                ))
              : kegiatansActivePerKategori &&
                kegiatansActivePerKategori.slice(1, 5).map((kegiatan) => (
                  <div
                    className="shadow-md hover:shadow-neutral-400 relative bg-orange-200 overflow-hidden rounded-md cursor-pointer group transition "
                    key={kegiatan.id}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent z-10 "></div>
                    <div className="absolute flex flex-col bottom-2 right-3 left-3 z-10">
                      <h1 className="text-lg font-bold text-white mb-2">
                        {kegiatan.tema}
                      </h1>
                      <div className="flex flex-row text-white justify-between text-xs">
                        <div className=" pl-2 border-l-2 border-red-500 uppercase">
                          {divisiActive[0]?.nama}
                        </div>
                        <div className="">
                          {formatTanggal(kegiatan.createdAt)}
                        </div>
                      </div>
                    </div>

                    <img
                      src={`${config.api_image}/${formatPathGambar(
                        kegiatan.gambar_kegiatan
                      )}`}
                      alt={kegiatan.tema}
                      className="h-full w-full object-cover group-hover:scale-105 transition group-hover:duration-700"
                    />
                  </div>
                ))}
          </div>
        </div>
      ) : (
        <div className=" basis-full lg:basis-1/2 flex">
          <div className=" flex w-full h-40 md:h-full bg-neutral-200 justify-center items-center text-4xl font-bold text-neutral-400 rounded-md">
            Tidak ada data
          </div>
        </div>
      )}
    </div>
  );
};

export default KegiatanTerbaru;
