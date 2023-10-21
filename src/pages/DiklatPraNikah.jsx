import { HiOutlinePencilSquare } from "react-icons/hi2";
import { PiDownloadSimpleBold } from "react-icons/pi";
import Button from "../components/Button";
import styles from "../style";
import SwiperModuleHome from "../components/swiper/SwiperHome";
import { getData } from "../utils/fetch";
import { useEffect, useState } from "react";
import formatPathGambar from "../utils/formatGambar";
import { config } from "../configs";
import { formatTanggalBulanText } from "../utils/dateFormat";

const DiklatShalatJenazah = () => {
  const [diklatJenazah, setDiklatJenazah] = useState([]);

  const fetchDiklat = async () => {
    try {
      const res = await getData("/diklat");
      const datas = res.data.data;
      const datasJenazah = datas.filter(
        (data) => data.tema === "DIKLATPRANIKAH"
      );
      setDiklatJenazah(datasJenazah);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDiklat();
  }, []);

  const downloadFileAtUrl = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  function formatHargaId(harga) {
    return harga.toLocaleString("id-ID");
  }

  return (
    <>
      {/* Swiper */}
      <div className="pt-[60px]">
        <SwiperModuleHome />
      </div>
      {/* Padding & Margin style */}
      <div
        className={`${styles.paddingX} ${styles.flexCenter} bg-Gray1 pt-[60px]`}
      >
        <div className={`${styles.boxWidth}  my-20 flex flex-col gap-20`}>
          {/* Judul dan Deskripsi */}
          <div className="flex flex-col justify-center items-center text-center gap-9">
            <h1 className="text-judul ">Diklat Pra Nikah</h1>
            <p className="w-full sm:w-[90%] md:w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo eaque possimus ipsa ipsum cumque nihil quas voluptates
              quae. Reprehenderit, animi!
            </p>
          </div>
          {/* Card Diklat */}
          <div className="flex flex-col  pb-3  gap-8 justify-start ">
            {diklatJenazah.map((diklat) => (
              <div
                className=" bg-white shadow-2xl shadow-slate-300
                  rounded-lg w-full xs:w-10/12 sm:w-5/6  mx-auto relative"
                key={diklat.id}
              >
                <div className="absolute -top-5 right-0 btn-grad rounded-full py-2 px-8 text-white shadow-md shadow-red-600 text-sm sm:text-base">
                  Diklat Mendatang
                </div>
                <div className="p-3 flex flex-col lg:flex-row gap-8 ">
                  {/* Left Side */}
                  <div className="flex flex-col justify-between">
                    <img
                      src={`${config.api_image}/${formatPathGambar(
                        diklat.poster_diklat
                      )}`}
                      alt="Profile"
                      className=" object-cover  rounded-lg h-[300px] sm:min-w-[300px] w-full mb-3"
                    />
                    <Button
                      label={"Download Poster"}
                      outline
                      icon={PiDownloadSimpleBold}
                      onClick={() => {
                        downloadFileAtUrl(
                          `${config.api_image}/${formatPathGambar(
                            diklat.poster_diklat
                          )}`
                        );
                      }}
                    />
                    {console.log(
                      `${config.api_image}/${formatPathGambar(
                        diklat.poster_diklat
                      )}`
                    )}
                  </div>
                  {/* Right Side */}
                  <div className="flex flex-col justify-between gap-3">
                    {/* Hari/Tanggal */}
                    <h1 className="text-3xl font-bold text-greenText ">
                      {formatTanggalBulanText(diklat.waktu)}
                    </h1>
                    <div className="mt-5 flex-col flex gap-2">
                      <div className=" flex flex-col gap-2">
                        {/* Lokasi */}
                        <div className="flex">
                          <p className=" text-base min-w-fit font-bold text-greenText">
                            Lokasi :&nbsp;
                          </p>
                          <p className=" text-base ">{diklat.lokasi}</p>
                        </div>
                        <hr />
                        {/* Pemateri */}
                        <div className="flex">
                          <p className=" text-base min-w-fit font-bold text-greenText">
                            Pemateri :&nbsp;
                          </p>
                          <p className=" text-base ">{diklat.pemateri}</p>
                        </div>
                        <hr />
                        {/* Fasilitas */}
                        <div className="flex">
                          <p className=" text-base min-w-fit font-bold text-greenText">
                            Fasilitas :&nbsp;
                          </p>
                          <p className=" text-base ">{diklat.fasilitas}</p>
                        </div>
                        <hr />
                        {/* Kuota */}
                        <div className="flex">
                          <p className=" text-base min-w-fit font-bold text-greenText">
                            Kuota :&nbsp;
                          </p>
                          <p className=" text-base ">{diklat.kuota} peserta</p>
                        </div>
                        <hr />
                        {/* Biaya */}
                        <div className="flex">
                          <p className=" text-base min-w-fit font-bold text-greenText">
                            Biaya Pendaftaran :&nbsp;
                          </p>
                          <p className=" text-base ">
                            Rp {formatHargaId(diklat.biaya)}
                          </p>
                        </div>
                        <hr />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-5">
                      <Button
                        icon={HiOutlinePencilSquare}
                        label={"Daftar Sekarang"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiklatShalatJenazah;
