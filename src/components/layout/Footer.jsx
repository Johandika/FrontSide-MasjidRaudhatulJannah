import { Facebook, Instagram, WhatsApp, Youtube, logo } from "../../assets/icons";
import { Link } from "react-router-dom";
import { navLinks } from "../../components/layout/Navbar";

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
        {navLinks.map((link) => (
          <div key={link.id}>
            {link.title !== "Home" && (
              <div className="flex flex-col gap-4 text-lg font-medium text-white px-2">
                <p className="text-TextYellow font-bold uppercase">{link.title}</p>
                <div className="flex flex-col sm:gap-3 gap-1 text-base font-normal text-white">
                  {link.submenu ? (
                    link.submenu.map((item) => (
                      <Link key={item.key} to={item.link}>
                        {item.title}
                      </Link>
                    ))
                  ) : (
                    <Link key={link.id} to={link.link}>
                      {link.title}
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
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
