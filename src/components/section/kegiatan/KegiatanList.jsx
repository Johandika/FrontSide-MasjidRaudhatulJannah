import { kegiatan } from "../../../assets/images";

const KegiatanList = ({ division, dataKegiatan }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-black">
      {dataKegiatan.map((kegiatan) => (
        <div
          key={kegiatan.id}
          className="bg-white shadow-md rounded-md overflow-hidden "
        >
          <img
            src={kegiatan.gambar_kegiatan}
            alt=""
            className="w-full h-[150px] object-cover"
          />
          <div className="p-3">
            <h1 className="text-lg font-bold  mb-2">
              Kegiatan Pemotretan Masjid Baitussalam
            </h1>
            <div className="flex flex-row  justify-between text-xs">
              <div className=" pl-2 border-l-2 border-red-500 uppercase">
                Media
              </div>
              <div className="">23 September 2023</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KegiatanList;
