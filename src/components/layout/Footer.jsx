import { Facebook, Instagram, WhatsApp, Youtube, logo } from "../../assets/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full ">
      {/* Atas */}
      <div className="flex sm:flex-row flex-col pt-12 pb-8 md:px-16 sm:px-6 px-0 justify-between items-center sm:items-start border-b-[1px] border-white text-center sm:text-start sm:gap-0 gap-10">
        {/* Alamat */}
        <div className="w-[250px] text-white flex flex-col  sm:items-start items-center  gap-4  ">
          <img src={logo} alt="logo" className="w-[72px] h-[60px] " />
          <p className="font-semibold text-lg">Masjid Raudhatul Jannah Islamic Center Pekanbaru</p>
          <p className="text-base">
            Jl. Tuanku Tambusai, Labuh Baru Tim, Kec. Payung Sekaki, Kota Pekanbaru, Riau 28123
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/0823788197372"
            className="flex gap-2 text-sm items-center cursor-pointer">
            <img src={WhatsApp} alt="WhatsApp" />
            +62 823766789292
          </a>
        </div>

        {/* Jadwal */}
        <div className="flex flex-col gap-4 text-lg font-medium text-white px-2">
          <p className="text-TextYellow font-bold">JADWAL</p>
          <div className="flex flex-col sm:gap-3 gap-1 text-base font-normal text-white">
            <Link to={"/tahsinIkhwan"}>Tahsin Ikhwan</Link>
            <Link to={"/tahsinAnak"}>Tahsin Anak</Link>
            <Link to={"/kajian"}>Kajian Rutin</Link>
            <Link to={"/bahasaArab"}>Kelas Bahasa Arab</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-lg font-medium text-white px-2">
          <p className="text-TextYellow font-bold">DIKLAT</p>
          <div className="flex flex-col sm:gap-3 gap-1 text-base font-normal text-white">
            <Link to={"/diklatJenazah"}>Diklat Jenazah</Link>
            <Link to={"/diklatPraNikah"}>Diklat Pra Nikah</Link>
            <Link to={"/diklatShalat"}>Diklat Fiqih Wudhu & Shalat</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-lg font-medium text-white px-2">
          <p className="text-TextYellow font-bold">DIVISI</p>
          <div className="flex flex-col sm:gap-3 gap-1 text-base font-normal text-white">
            <Link to={"/kegiatan"}>Kegiatan</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-lg font-medium text-white px-2">
          <p className="text-TextYellow font-bold">DONASI</p>
          <div className="flex flex-col sm:gap-3 gap-1 text-base font-normal text-white">
            <Link to={"/donasi"}>Donasi</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-lg font-medium text-white px-2">
          <p className="text-TextYellow font-bold">LINK KAJIAN</p>
          <div className="flex flex-col sm:gap-3 gap-1 text-base font-normal text-white">
            <Link to={"/linkKajianRutin"}>Kajian Rutin </Link>
            <Link to={"/linkKajianTablighAkbar"}>Tabligh Akbar </Link>
          </div>
        </div>
      </div>

      {/* Bawah */}
      <div className="w-full py-7 md:px-16 sm:px-6 px-0 flex sm:flex-row sm:gap-0 gap-7 flex-col text-white justify-between items-center">
        <div>
          <p className="text-center">Copyright 2023 Muhsinin Erje . All Rights Reserved</p>
        </div>
        <div className="flex justify-end gap-5 items-center">
          <a href="https://www.instagram.com/masjidrj/" rel="noopener noreferrer" target="_blank">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/MasjidRaudhatulJannahPKU"
            rel="noopener noreferrer"
            target="_blank">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.youtube.com/@ErjeTv" rel="noopener noreferrer" target="_blank">
            <img src={Youtube} alt="Youtube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
