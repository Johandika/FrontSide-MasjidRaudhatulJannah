// import { formatTanggal } from "../../../utils/dateFormat";

import { config } from "../../../configs";

const KegiatanTerbaru = ({ kegiatan, dataKegiatan, dataDivisi }) => {
  // Temukan divisi yang sesuai berdasarkan ID divisi
  const divisi = dataDivisi.find((div) => div.id === kegiatan.DivisiId);

  // Pastikan divisi ditemukan sebelum mengakses properti nama
  const namaDivisi = divisi ? divisi.nama : "Divisi tidak ditemukan";

  // const waktuAwal = new Date();
  // const tanggalYangDiinginkan = formatTanggal(waktuAwal);
  // console.log(tanggalYangDiinginkan);

  console.log("kegiatan");
  console.log(kegiatan);
  function replaceBackslashesWithSlashes(inputString) {
    return inputString.replace(/\\/g, "/");
  }

  const gambarKegiatan = kegiatan.gambar_kegiatan;
  const urlGambar = replaceBackslashesWithSlashes(gambarKegiatan);

  // Output: "upload/gambar_kegiatan/1696948060383bagisembako.jpeg"

  return (
    <div
      className={` flex flex-col lg:flex-row h-full lg:h-[400px] w-full gap-4 `}
    >
      {/* Ambil 1 data terbaru */}
      <div className=" lg:basis-1/2  w-full">
        <div className=" h-full w-full relative overflow-hidden rounded-md">
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
          <div className="absolute flex flex-col bottom-3 right-3 left-3 bg">
            <h1 className="text-3xl font-bold text-white mb-2">
              {kegiatan.tema}
            </h1>
            <div className="flex flex-row text-white justify-between text-sm">
              <div className=" pl-2 border-l-2 border-red-500 uppercase">
                {namaDivisi}
              </div>
              <div className="">23 September 2023</div>
            </div>
          </div>
          <img
            src={`${config.api_image}/${urlGambar}`}
            alt="kegiatan div"
            className="w-full h-[400px] object-center object-cover"
          />
        </div>
      </div>
      <div className="basis-full lg:basis-1/2 flex ">
        <div className="w-full h-full grid grid-cols-2 gap-4">
          {/* Looping Card  */}
          {dataKegiatan.slice(-4).map((kegiatan) => (
            <div
              className="relative bg-orange-200 overflow-hidden rounded-sm"
              key={kegiatan.id}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
              <div className="absolute flex flex-col bottom-2 right-3 left-3 ">
                <h1 className="text-lg font-bold text-white mb-2">
                  {kegiatan.tema}
                </h1>
                <div className="flex flex-row text-white justify-between text-xs">
                  <div className=" pl-2 border-l-2 border-red-500 uppercase">
                    {namaDivisi}
                  </div>
                  <div className="">23 September 2023</div>
                </div>
              </div>
              {/* {console.log(`http://localhost:9000/${urlGambar}`)} */}

              <img
                src={`${config.api_image}/${urlGambar}`}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KegiatanTerbaru;
