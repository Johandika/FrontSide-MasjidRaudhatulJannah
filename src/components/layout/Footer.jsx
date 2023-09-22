import React from "react";
import {
  Facebook,
  Instagram,
  WhatsApp,
  Youtube,
  logo,
} from "../../assets/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-Green">
      {/* Atas */}
      <div className="flex pt-12 pb-8 px-16 justify-between border-b-[1px] border-white">
        {/* Alamat */}
        <div className="w-[250px] text-white flex flex-col gap-3  ">
          <img src={logo} alt="logo" className="w-[72px] h-[60px] " />
          <p className="font-semibold text-lg">
            Masjid Raudhatul Jannah Islamic Center Pekanbaru
          </p>
          <p>
            Jl. Tuanku Tambusai, Labuh Baru Tim, Kec. Payung Sekaki, Kota
            Pekanbaru, Riau 28123
          </p>
          <a
            target="_blank"
            href="https://wa.me/0823788197372"
            className="flex gap-2 text-sm items-center cursor-pointer"
          >
            <img src={WhatsApp} alt="WhatsApp" />
            +62 823766789292
          </a>
        </div>

        {/* Jadwal */}
        <div className="flex flex-col gap-3 text-lg font-semibold text-white">
          <p className="text-TextYellow">JADWAL</p>
          <Link to={"/tahsinIkhwan"}>Tahsin Ikhwan</Link>
          <Link to={"/tahsinAnak"}>Tahsin Anak</Link>
          <Link to={"/kajian"}>Kajian Rutin</Link>
          <Link to={"/bahasaArab"}>Kelas Bahasa Arab</Link>
        </div>
        <div className="flex flex-col gap-3 text-lg font-semibold text-white">
          <p className="text-TextYellow">DIKLAT</p>
          <Link to={"/diklatJenazah"}>Diklat Jenazah</Link>
          <Link to={"/diklatPraNikah"}>Diklat Pra Nikah</Link>
          <Link to={"/diklatShalat"}>Diklat Fiqih Wudhu & Shalat</Link>
        </div>
        <div className="flex flex-col gap-3 text-lg font-semibold text-white">
          <p className="text-TextYellow">Divisi</p>
          <Link to={"/kegiatan"}>Kegiatan</Link>
        </div>
        <div className="flex flex-col gap-3 text-lg font-semibold text-white">
          <p className="text-TextYellow">Rekening Donasi</p>
          <Link to={"/donasi"}>Donasi</Link>
        </div>
        <div className="flex flex-col gap-3 text-lg font-semibold text-white">
          <p className="text-TextYellow">Link Kajian</p>
          <Link to={"/linkKajian"}>Link </Link>
        </div>
      </div>
      <div className="w-full py-7 px-16 flex text-white justify-between items-center">
        <div>
          <p>Copyright 2023 Muhsinin Erje . All Rights Reserved</p>
        </div>
        <div className="flex justify-end gap-5 items-center">
          <a href="https://www.instagram.com/masjidrj/" target="_blank">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/MasjidRaudhatulJannahPKU"
            target="_blank"
          >
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.youtube.com/@ErjeTv" target="_blank">
            <img src={Youtube} alt="Youtube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
