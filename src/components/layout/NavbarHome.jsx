import React, { useCallback, useEffect, useState } from "react";

const NavbarHome = ({ children }) => {
  const initialActive = localStorage.getItem("active") || "Home";

  const [active, setActive] = useState(initialActive);
  const [navbarBg, setNavbarBg] = useState(
    initialActive === "Home"
      ? "bg-transparent text-white"
      : "bg-white border-b-[1px] text-black"
  );

  // Function untuk handle style saat scroll
  const handleScroll = useCallback(() => {
    if (window.scrollY === 0 && active === "Home") {
      setNavbarBg("bg-transparent text-white ");
    } else {
      setNavbarBg("bg-white border-b-[1px] text-black");
    }
  }, [active]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Set local storage sesuai state active
  useEffect(() => {
    localStorage.setItem("active", active);

    if (active === "Home") {
      setNavbarBg("bg-transparent text-white ");
    } else {
      setNavbarBg("bg-white border-b-[1px] text-black");
    }
  }, [active]);

  const dataUntukChildren = {
    active,
    setActive,
  };

  console.log(active);
  return (
    <header className={`transition duration-200 ${navbarBg} `}>
      {React.cloneElement(children, { ...dataUntukChildren })}
    </header>
  );
};

export default NavbarHome;
