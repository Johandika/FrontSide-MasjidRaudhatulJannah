import React, { useEffect, useState } from "react";

const NavbarHome = ({ children }) => {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [navbarText, setNavbarText] = useState("text-black");
  const [active, setActive] = useState("Home");

  console.log("active1");
  console.log(active);

  const dataUntukChildren = {
    active,
    setActive,
  };

  useEffect(() => {
    if (active === "Home" && window.scrollY === 0) {
      // Jika active adalah "Home", ubah warna teks menjadi merah
      setNavbarText("text-red-500");
    } else {
      // Jika active bukan "Home", ubah warna teks menjadi hitam
      setNavbarText("text-black");
    }

    // Tambahkan event listener untuk mendeteksi scroll
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active]);

  const handleScroll = () => {
    // Periksa active di sini
    console.log("active3");
    console.log(active);
    if (window.scrollY === 0 && active === "Home") {
      setNavbarBg("bg-transparent ");
    } else {
      setNavbarBg("bg-white border-b-[1px] ");
    }
  };

  return (
    <header className={`transition duration-200 ${navbarBg} ${navbarText}`}>
      {React.cloneElement(children, { ...dataUntukChildren })}
    </header>
  );
};

export default NavbarHome;
