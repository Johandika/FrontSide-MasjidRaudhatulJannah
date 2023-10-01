import styles from "../style";

const LinkKajian = () => {
  return (
    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-Gray1 pt-[60px]  flex flex-col`}
    >
      <div className={` my-20 bg-blue-500`}></div>
      <div className="container mx-auto flex flex-row ">
        {/* width
        <div className="flex flex-wrap ">
          <div className="w-1/2 sm:w-1/4  p-1 border-4  ">
            <div className="bg-slate-300 p-2">
              Konten1 jjoajosd joasofd joajsodf osdjfosjos
            </div>
          </div>
          <div className="w-1/2 sm:w-1/4  p-1 border-4  ">
            <div className="bg-slate-300 p-2">
              Konten1 jjoajosd joasofd joajsodf osdjfosjos
            </div>
          </div>
          <div className="w-1/2 sm:w-1/4  p-1 border-4  ">
            <div className="bg-slate-300 p-2">
              Konten1 jjoajosd joasofd joajsodf osdjfosjos
            </div>
          </div>
          <div className="w-1/2 sm:w-1/4 p-1 border-4  ">
            <div className="bg-slate-300 p-2">
              Konten1 jjoajosd joasofd joajsodf osdjfosjos
            </div>
          </div>
        </div>
        {/* flex basis */}
        {/* <div className="flex flex-wrap ">
          <div className="basis-1/2 sm:basis-1/4  p-1 border-4  ">
            <div className="bg-blue-300 p-2">
              Konten1 jjoajosd joasofd joajsodf osdjfosjos
            </div>
          </div>
          <div className="basis-1/2 sm:basis-1/4  p-1 border-4  ">
            <div className="bg-blue-300 p-2">
              Konten1 jjoajosd joasofd joajsodf osdjfosjos
            </div>
          </div>
          <div className="basis-1/2 sm:basis-1/4  p-1 border-4  ">
            <div className="bg-blue-300 p-2">
              Konten1 jjoajosd joasofd joajsodf osdjfosjos
            </div>
          </div>
          <div className="basis-1/2 sm:basis-1/4  p-1 border-4  ">
            <div className="bg-blue-300 p-2">
              Konten1 jjoajosd joasofd joajsodf osdjfosjos
            </div>
          </div>
        </div>{" "}
        */}
        {/* Kode 1 */}
        <div className=" flex flex-wrap w-1/2  bg-blue-200  gap-4">
          <div className="w-1/2  bg-slate-400">Elemen 1</div>
          <div className="w-1/2  bg-slate-400">Elemen 2</div>
        </div>
        {/* Kode 2 */}
        <div className="flex flex-row flex-wrap  w-1/2 bg-blue-100 gap-4">
          <div className="w-[200px] p-4 border bg-slate-400">Elemen 1</div>
          <div className="w-[200px] p-4 border bg-slate-400">Elemen 2</div>
          <div className="w-[200px] p-4 border bg-slate-400">Elemen 3</div>
          <div className="w-[200px] p-4 border bg-slate-400">Elemen 4</div>
        </div>
      </div>
      <div className="flex flex-wrap w-full gap-1">
        <div className="w-1/4 bg-yellow">johan</div>
        <div className="w-1/4">johan</div>
        <div className="w-1/4 bg-yellow">johan</div>
        <div className="w-1/4">johan</div>
        <div className="w-1/4">johan</div>
        <div className="w-1/4">johan</div>
        <div className="w-1/4">johan</div>
        <div className="w-1/4">johan</div>
      </div>
    </div>
  );
};

export default LinkKajian;
