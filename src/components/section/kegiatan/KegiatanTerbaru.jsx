import { kegiatan, profile } from "../../../assets/images";

const KegiatanTerbaru = ({ division, divisions }) => {
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
              Kegiatan Pemotretan Masjid Baitussalam
            </h1>
            <div className="flex flex-row text-white justify-between text-sm">
              <div className=" pl-2 border-l-2 border-red-500 uppercase">
                Media
              </div>
              <div className="">23 September 2023</div>
            </div>
          </div>
          <img
            src={profile}
            alt="kegiatan div"
            className="w-full h-[400px] object-center object-cover"
          />
        </div>
      </div>
      <div className="basis-full lg:basis-1/2 flex ">
        <div className="w-full h-full grid grid-cols-2 gap-4">
          {/* Looping Card  */}
          {divisions.slice(-4).map((divisi) => (
            <div
              className="relative bg-orange-200 overflow-hidden rounded-sm"
              key={divisi.id}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
              <div className="absolute flex flex-col bottom-2 right-3 left-3 ">
                <h1 className="text-lg font-bold text-white mb-2">
                  Kegiatan Pemotretan Masjid
                </h1>
                <div className="flex flex-row text-white justify-between text-xs">
                  <div className=" pl-2 border-l-2 border-red-500 uppercase">
                    Media
                  </div>
                  <div className="">23 September 2023</div>
                </div>
              </div>
              <img
                src={kegiatan}
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
