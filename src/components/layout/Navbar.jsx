import { Link } from "react-router-dom";
import { logo } from "../../assets/icons";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
const Jadwal = [
  {
    key: "1",
    label: <Link to={"/tahsinIkhwan"}> Tahsin Ikhwan</Link>,
  },
  {
    key: "2",
    label: <Link to={"/tahsinAnak"}>Tahsin Anak</Link>,
  },
  {
    key: "3",
    label: <Link to={"/kajian"}>Kajian Rutin</Link>,
  },
  {
    key: "4",
    label: <Link to={"/bahasaArab"}>Kelas Bahasa Arab</Link>,
  },
];

let Diklat = [
  {
    key: "5",
    label: <Link to={"/diklatJenazah"}> Diklat Jenazah</Link>,
  },
  {
    key: "6",
    label: <Link to={"/diklatPraNikah"}>Diklat Pra Nikah</Link>,
  },
  {
    key: "7",
    label: <Link to={"/diklatShalat"}>Diklat Fiqih Wudhu & Shalat</Link>,
  },
];

let LinkKajian = [
  {
    key: "8",
    label: <Link to={"/linkKajianRutin"}> Kajian Rutin</Link>,
  },
  {
    key: "9",
    label: <Link to={"/linkKajianTablighAkbar"}>Kajian Tabligh Akbar</Link>,
  },
];

const Navbar = () => {
  return (
    <div className="w-full px-12 py-4 flex items-center border-b-[1px] border-slate-200">
      <div className="flex w-[20%]">
        <Link to={"/"}>
          <img
            src={logo}
            className="w-[72px] h-[60px] "
          />
        </Link>
      </div>
      <div className="flex w-[80%]  gap-8 justify-end text-lg font-semibold ">
        <Dropdown
          menu={{
            items: Jadwal,
          }}
        >
          <a
            onClick={(e) => e.preventDefault()}
            className="flex gap-1"
          >
            <p>Jadwal</p>

            <DownOutlined />
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items: Diklat,
          }}
        >
          <a
            onClick={(e) => e.preventDefault()}
            className="flex gap-1"
          >
            <p>Diklat</p>

            <DownOutlined />
          </a>
        </Dropdown>
        <Link to={"/kegiatan"}>Kegiatan</Link>
        <Link to={"/donasi"}>Donasi</Link>
        <Dropdown
          menu={{
            items: LinkKajian,
          }}
        >
          <a
            onClick={(e) => e.preventDefault()}
            className="flex gap-1"
          >
            <p>Link Kajian</p>

            <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
