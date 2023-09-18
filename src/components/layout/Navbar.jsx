import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full p-8 flex">
      <div className="flex w-[20%]">
        <Link to={"/"}>Logo</Link>
      </div>
      <div className="flex w-[80%]  gap-8 justify-end pr-32">
        <Link to={"/jadwalkajian"}>jadwal Kajian</Link>
        <Link to={"/jadwaltahsin"}>jadwal Tahsin</Link>
        <Link to={"/donasi"}>Donasi</Link>
        <Link to={"/kegiatan"}>Kegiatan</Link>
      </div>
    </div>
  );
};

export default Navbar;
