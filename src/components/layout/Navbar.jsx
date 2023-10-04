import { Link } from "react-router-dom";
import { logo } from "../../assets/icons";
import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

import { Dropdown } from "antd";
import styles from "../../style";
import { useState } from "react";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "/",
  },
  {
    id: "jadwal",
    title: "Jadwal",

    submenu: [
      {
        key: "1",
        link: "/tahsin",
        title: "Tahsin",
      },
      {
        key: "2",
        link: "/kajian",
        title: "Kajian Rutin",
      },
      {
        key: "3",
        link: "/bahasaArab",
        title: "Kelas Bahasa Arab",
      },
    ],
  },
  {
    id: "diklat",
    title: "Diklat",
    submenu: [
      {
        key: "5",
        link: "/diklatJenazah",
        title: "Diklat Jenazah",
      },
      {
        key: "6",
        link: "/diklatPraNikah",
        title: "Diklat Pra Nikah",
      },
      {
        key: "7",
        link: "/diklatShalat",
        title: "Diklat Fiqih Wudhu & Shalat",
      },
    ],
  },
  {
    id: "kegiatan",
    title: "Kegiatan",
    link: "/kegiatan",
  },
  {
    id: "donasi",
    title: "Donasi",
    link: "/donasi",
  },
  {
    id: "linkkajian",
    title: "Link Kajian",
    submenu: [
      {
        key: "8",
        link: "/linkKajianRutin",
        title: "Kajian Rutin",
      },
      {
        key: "9",
        link: "/linkKajianTablighAkbar",
        title: "Kajian Tabligh Akbar",
      },
    ],
  },
];

const Jadwal = [
  {
    key: "1",
    label: <Link to={"/tahsin"}> Tahsin</Link>,
  },
  {
    key: "2",
    label: <Link to={"/kajian"}>Kajian Rutin</Link>,
  },
  {
    key: "3",
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
  const [active, setActive] = useState("/");
  const [toggle, setToggle] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({});
  const [menuIconStatus, setMenuIconStatus] = useState(false);

  const toggleSubMenu = (menuId) => {
    setSubMenuOpen({
      ...subMenuOpen,
      [menuId]: !subMenuOpen[menuId],
    });

    setMenuIconStatus(!menuIconStatus);
  };

  return (
    <div className=" w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} border-b-[1px]`}>
        <div className={`${styles.boxWidth} `}>
          <div className="w-full  py-4  items-center  border-slate-200 flex">
            {/* Logo */}
            <div className="flex flex-1 w-[20%] ">
              <Link
                to={"/"}
                onClick={() => {
                  setActive("Home");
                }}>
                <img src={logo} className="w-[60px] -my-3" />
              </Link>
            </div>

            <div className=" w-[80%]  gap-8 justify-end text-lg font-semibold sm:flex hidden">
              {/* Jadwal */}
              <Dropdown
                menu={{
                  items: Jadwal,
                }}
                className={
                  active === "Jadwal" ? "text-greenText font-semibold " : "text-black font-normal "
                }>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setActive("Jadwal");
                  }}
                  className="flex gap-1">
                  <p>Jadwal</p>
                  <MdOutlineKeyboardArrowDown className="h-auto" />
                </a>
              </Dropdown>

              {/* Diklat */}
              <Dropdown
                menu={{
                  items: Diklat,
                }}
                className={
                  active === "Diklat" ? "text-greenText font-bold" : "text-black font-normal"
                }>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setActive("Diklat");
                  }}
                  className="flex gap-1">
                  <p>Diklat</p>
                  <MdOutlineKeyboardArrowDown className="h-auto" />
                </a>
              </Dropdown>

              {/* Kegiatan */}
              <Link
                to={"/kegiatan"}
                className={
                  active === "Kegiatan" ? "text-greenText font-bold" : "text-black font-normal"
                }
                onClick={() => setActive("Kegiatan")}>
                Kegiatan
              </Link>

              {/* Donasi */}
              <Link
                to={"/donasi"}
                className={
                  active === "Donasi" ? "text-greenText font-bold" : "text-black font-normal"
                }
                onClick={() => setActive("Donasi")}>
                Donasi
              </Link>

              {/* Link Kajian */}
              <Dropdown
                menu={{
                  items: LinkKajian,
                }}
                className={
                  active === "LinkKajian" ? "text-greenText font-bold " : "text-black font-normal "
                }>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setActive("LinkKajian");
                  }}
                  className="flex gap-1">
                  <p>Link Kajian</p>

                  <MdOutlineKeyboardArrowDown className="h-auto" />
                </a>
              </Dropdown>
            </div>

            {/* Mobile Menu */}
            <div className="sm:hidden flex justify-end items-center">
              {toggle ? (
                <>
                  <IoClose
                    alt="menu"
                    className="w-[36px] h-[36px] object-contain text-greenText -my-2"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  />

                  <div className="bg-white flex flex-col absolute top-[70px] right-4 border-2  rounded-lg min-w-[160px] justify-center  p-1 ">
                    <ul className="flex flex-col  text-center  ">
                      {/* Perulangan menu */}
                      {navLinks.map((menu, index) => (
                        <>
                          <div
                            key={menu.id}
                            className={`flex flex-row items-center justify-center rounded-sm ${
                              active === menu.id ? "text-greenText bg-neutral-100" : ""
                            }`}>
                            <li className="py-2 ">
                              {/* Menu */}
                              {/* Cek apa dia punya submenu, jika iya maka menu utamanya tidak akan mmenjadi link melainkan div yang membuka submenu tapi jika tidak maka dia akan link langsung */}
                              {!menu.submenu ? (
                                <Link
                                  to={menu.link}
                                  onClick={() => {
                                    toggleSubMenu(menu.id);
                                    setActive(menu.id);
                                  }}>
                                  <div
                                    className={`flex items-center justify-center font-semibold `}>
                                    {menu.title}
                                    {menu.submenu &&
                                      (subMenuOpen[menu.id] ? (
                                        <MdOutlineKeyboardArrowUp className="ml-1" />
                                      ) : (
                                        <MdOutlineKeyboardArrowDown className="ml-1" />
                                      ))}
                                  </div>
                                </Link>
                              ) : (
                                <div
                                  to={menu.link}
                                  onClick={() => {
                                    toggleSubMenu(menu.id);
                                    setActive(menu.id);
                                  }}>
                                  <div
                                    className={`flex items-center justify-center font-semibold `}>
                                    {menu.title}
                                    {menu.submenu &&
                                      (subMenuOpen[menu.id] ? (
                                        <MdOutlineKeyboardArrowUp className="ml-1" />
                                      ) : (
                                        <MdOutlineKeyboardArrowDown className="ml-1" />
                                      ))}
                                  </div>
                                </div>
                              )}

                              {/* Submenu */}
                              {menu.submenu && subMenuOpen[menu.id] && (
                                <ul className="text-left  p-2">
                                  {menu.submenu.map((submenu, index) => (
                                    <>
                                      <li key={submenu.key} className="py-1">
                                        <Link
                                          to={submenu.link}
                                          onClick={() => {
                                            setToggle(!toggle);
                                            toggleSubMenu(menu.id);
                                          }}>
                                          - {submenu.title}
                                        </Link>
                                      </li>
                                      {index !== menu.submenu.length - 1 && <hr />}
                                    </>
                                  ))}
                                </ul>
                              )}
                            </li>
                          </div>
                          {index !== navLinks.length - 1 && <hr />}
                        </>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <HiMenu
                  alt="menu"
                  className="w-[36px] h-[36px] object-contain text-greenText -my-2"
                  onClick={() => setToggle(!toggle)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
