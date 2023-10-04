import { useState } from "react";
import styles from "../style";

const tahsins = [
  {
    id: 1,
    kategori: "Tahsin Ikhwan",
    hari: [
      {
        namaHari: "Senin dan Rabu",
        kelas: [
          {
            namaKelas: "1A",
            pemateri: "Ust. Yuslan",
            peserta: ["johandika", "Naufal", "Hanif", "Abdul"],
          },
          {
            namaKelas: "1B",
            pemateri: "Ust. Yuslan",
            peserta: ["johandika", "Naufal", "Hanif", "Abdul"],
          },
          {
            namaKelas: "2A",
            pemateri: "Ust. Yuslan",
            peserta: ["johandika", "Naufal", "Hanif", "Abdul"],
          },
          {
            namaKelas: "2B",
            pemateri: "Ust. Yuslan",

            peserta: ["johandika", "Naufal", "Hanif", "Abdul"],
          },
          {
            namaKelas: "3A",
            pemateri: "Ust. Anum",
            peserta: ["johandika", "Naufal", "Hanif", "Abdul"],
          },
        ],
      },
      {
        namaHari: "Selasa dan Kamis",
        kelas: [
          {
            namaKelas: "1A",
            pemateri: "Ust. Yuslan",
            peserta: ["johandika", "Naufal", "Hanif", "Abdul"],
          },
          {
            namaKelas: "1B",
            pemateri: "Ust. Yuslan",
            peserta: ["johandika", "Naufal", "Hanif", "Abdul"],
          },
          {
            namaKelas: "2A",
            pemateri: "Ust. Yuslan",
            peserta: ["johandika", "Naufal", "Hanif", "Abdul"],
          },
          {
            namaKelas: "2B",
            pemateri: "Ust. Yuslan",

            peserta: ["johandika", "Naufal", "Hanif", "Abdul"],
          },
          {
            namaKelas: "3A",
            pemateri: "Ust. Anum",
            peserta: ["johandika", "Naufal", "Hanif", "Abdul"],
          },
        ],
      },
      {
        namaHari: "Jumat dan Ahad",
        kelas: [
          {
            namaKelas: "1A",
            pemateri: "Ust. Yuslan",
            peserta: ["johandika", "Naufal", "Hanif", "Abdul"],
          },
          {
            namaKelas: "1B",
            pemateri: "Ust. Yuslan",
            peserta: ["johandika", "Naufal", "Hanif", "Abdul"],
          },
          {
            namaKelas: "2A",
            pemateri: "Ust. Yuslan",
            peserta: ["johandika", "Naufal", "Hanif", "Abdul"],
          },
          {
            namaKelas: "2B",
            pemateri: "Ust. Yuslan",

            peserta: ["johandika", "Naufal", "Hanif", "Abdul"],
          },
          {
            namaKelas: "3A",
            pemateri: "Ust. Anum",
            peserta: ["johandika", "Naufal", "Hanif", "Abdul"],
          },
        ],
      },
    ],
  },
];

const TahsinIkhwan = () => {
  const [categoryActive, setCategoryActive] = useState("Tahsin Ikhwan");
  const [hariActive, setHariActive] = useState("Senin dan Rabu");

  // Filter pertama untuk kategori
  const filteredTahsins = tahsins.filter(
    (tahsin) => categoryActive === tahsin.kategori
  );

  // Filter kedua untuk hari
  const filteredKelas = tahsins.flatMap((tahsin) =>
    tahsin.hari
      .filter((hari) => hari.namaHari === hariActive)
      .flatMap((hari) => hari.kelas)
  );

  // Menggabungkan hasil kedua filter
  const combinedFilter = [...filteredTahsins, ...filteredKelas];

  return (
    <div
      className={`${styles.paddingX} ${styles.flexCenter} pt-[60px] bg-Gray1`}
    >
      <div className={`${styles.boxWidth}  my-20 flex flex-col gap-20`}>
        <div className="flex flex-wrap flex-row gap-4">
          {/* Badge */}
          {tahsins.map((tahsin) => (
            <div
              className={`px-4 py-2 bg-white rounded-md shadow-sm cursor-pointer  ${
                categoryActive === tahsin.kategori
                  ? "bg-greenText text-white font-bold"
                  : "hover:bg-yellow hover:scale-105 transition"
              }`}
              key={tahsin.kategori}
              onClick={() => {
                setCategoryActive(tahsin.kategori);
              }}
            >
              {tahsin.kategori}
            </div>
          ))}

          {tahsins.map((tahsin) =>
            tahsin.hari.map((hari) => (
              <div
                className={`px-4 py-2 bg-white rounded-md shadow-sm cursor-pointer  ${
                  hariActive === hari.namaHari
                    ? "bg-greenText text-white font-bold"
                    : "hover:bg-yellow hover:scale-105 transition"
                }`}
                key={hari.namaHari}
                onClick={() => {
                  setHariActive(hari.namaHari);
                }}
              >
                {hari.namaHari}
              </div>
            ))
          )}
        </div>
        {/* Judul dan Deskripsi */}
        <div className="flex flex-col justify-center items-center text-center gap-9">
          <h1 className="text-judul ">Jadwal Tahsin Ikhwan</h1>
          <p className="w-full sm:w-[90%] md:w-[70%]">
            Tahsin ikhwan adalah program tahsin yang dimiliki oleh RJIC untuk
            peserta tahsin laki-laki dewasa.
          </p>
        </div>
        {/* Card */}
        {combinedFilter.map((item) => (
          <li key={item.namaKelas || item.kategori}>
            <div
              className="grid grid-cols-4 gap-4"
              key={item.id}
            >
              {/* Perulangan */}
              <div
                className="flex flex-1 justify-start flex-col  bg-white shadow rounded-md p-5 gap-4"
                key={item.namaKelas}
              >
                <div className="text-center">
                  <div className="text-greenText font-bold text-2xl">
                    {item.namaKelas || item.kategori}
                  </div>
                </div>
                <hr />
                <div className="text-greenBackground font-bold">
                  {item.pemateri}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-neutral-500 font-base text-sm">
                    Peserta :
                  </p>
                  <ol className="text-neutral-500 font-semibold">
                    {item.namaKelas ? (
                      // Ini adalah kelas, maka tampilkan peserta
                      item.peserta.map((peserta, index) => (
                        <li key={index}>
                          {index + 1}. {peserta}
                        </li>
                      ))
                    ) : (
                      // Ini adalah kategori, maka tidak perlu menampilkan peserta
                      <li>Tidak ada peserta</li>
                    )}
                  </ol>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default TahsinIkhwan;
