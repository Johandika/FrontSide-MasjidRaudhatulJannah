import React, { useCallback, useEffect, useState } from "react";

const NavbarHome = ({ children }) => {
  const [navbarBg, setNavbarBg] = useState("bg-transparent text-white");
  const [active, setActive] = useState("Home");

  const dataUntukChildren = {
    active,
    setActive,
  };

  const handleScroll = useCallback(() => {
    if (window.scrollY === 0 && active === "Home") {
      setNavbarBg("bg-transparent text-white ");
    } else {
      setNavbarBg("bg-white border-b-[1px] text-black");
    }
  }, [active]);

  useEffect(() => {
    // handleScroll jalan saat scroll
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active, handleScroll]);

  return (
    <header
      className={`transition duration-200 ${
        active === "Home" ? navbarBg : "text-black bg-white border-b-[1px]"
      } `}
    >
      {React.cloneElement(children, { ...dataUntukChildren })}
    </header>
  );
};

export default NavbarHome;
