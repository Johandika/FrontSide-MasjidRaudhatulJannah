import { HiOutlinePencilSquare } from "react-icons/hi2";
import { PiDownloadSimpleBold } from "react-icons/pi";
import Button from "../components/Button";
import styles from "../style";
import { kegiatan } from "../assets/images";
import SwiperModuleHome from "../components/swiper/SwiperHome";

const diklats = [
  {
    id: 1,
    nama: "Diklat Jenazah",
    tanggal: "22 Oktober 2023",
    jam: "08.00 - Selesai",
    poster: kegiatan,
    kontak: "082378907857",
    fasilitas: "Sertifikat, Materi Diklat, Praktek, Alat Tulis, Ruangan AC",
    formatPendaftaran:
      "#Nama, #Jenis kelamin, #Domisili ,#Diklat yang ingin diikuti,#Tanggal diklat",
    lokasi:
      "Lt. 3 Gedung Diklat, Masjid Raudhatul Jannah Islamic Center, Jl. Tuanku Tambusai,Pekanbaru",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint repudiandae tenetur excepturi accusamus? Ab aliquam esse sint harum beatae ex animi maiores. Recusandae quia repellendus itaque dolorem corporis fugit sequi laboriosam eaque, alias magni ducimus sint est. Culpa, atque.",
    kuota: 25,
  },
];

const DiklatShalatJenazah = () => {
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
            <h1 className="text-judul ">Diklat Jenazah</h1>
            <p className="w-full sm:w-[90%] md:w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo eaque possimus ipsa ipsum cumque nihil quas voluptates
              quae. Reprehenderit, animi!
            </p>
          </div>
          {/* Card Diklat */}
          <div className="flex   pb-3  gap-8 justify-start ">
            {diklats.map((diklat) => (
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
                  <div>
                    <img
                      src={diklat.poster}
                      alt="Profile"
                      className=" object-cover  rounded-lg h-[300px] sm:min-w-[300px] w-full mb-3"
                    />
                    <Button
                      label={"Download Poster"}
                      outline
                      icon={PiDownloadSimpleBold}
                    />
                  </div>
                  {/* Right Side */}
                  <div className="flex flex-col justify-between gap-3">
                    {/* Hari/Tanggal */}
                    <h1 className="text-3xl font-bold text-greenText ">
                      Rabu, 22 Oktober 2023
                    </h1>
                    <div className="mt-5 flex-col flex gap-2">
                      <div className=" flex flex-col gap-2">
                        {/* Lokasi */}
                        <div className="flex">
                          <p className=" text-base min-w-fit font-bold text-greenText">
                            Lokasi :&nbsp;
                          </p>
                          <p className=" text-base ">
                            Lt. 3 Gedung Diklat, Masjid Raudhatul Jannah Islamic
                            Center, Jl. Tuanku Tambusai,Pekanbaru
                          </p>
                        </div>
                        <hr />
                        {/* Fasilitas */}
                        <div className="flex">
                          <p className=" text-base min-w-fit font-bold text-greenText">
                            Fasilitas :&nbsp;
                          </p>
                          <p className=" text-base ">
                            Sertifikat, Materi Diklat, Praktek, Alat Tulis,
                            Ruangan AC
                          </p>
                        </div>
                        <hr />

                        {/* Kuota */}
                        <div className="flex">
                          <p className=" text-base min-w-fit font-bold text-greenText">
                            Kuota :&nbsp;
                          </p>
                          <p className=" text-base ">25 peserta</p>
                        </div>
                        <hr />

                        {/* Biaya */}
                        <div className="flex">
                          <p className=" text-base min-w-fit font-bold text-greenText">
                            Biaya Pendaftaran :&nbsp;
                          </p>
                          <p className=" text-base ">Rp 100.000</p>
                        </div>

                        <hr />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-5">
                      <p>Daftar sekarang, kuota terbatas :</p>
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
