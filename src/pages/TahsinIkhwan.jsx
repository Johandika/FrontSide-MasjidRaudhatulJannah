import { useEffect, useState } from "react";
import styles from "../style";
import { getData } from "../utils/fetch";

// Fungsi untuk melakukan filter berdasarkan kategori dan hari yang aktif
const filterTahsinData = (tahsins, kategori, hari) => {
  return tahsins
    .filter((tahsin) => tahsin.kategori === kategori)
    .map((tahsin) => ({
      ...tahsin,
      data: tahsin.data.filter((h) => h.Jadwal.hari === hari),
    }));
  // .filter((tahsin) => tahsin.Jadwal.hari.length > 0);
};

// Komponen untuk menampilkan data dalam bentuk card
const TahsinCard = ({ tahsin, kategori }) => {
  return (
    <div className="flex flex-1 justify-start flex-col  bg-white shadow rounded-md p-5 gap-4">
      <div className="text-center">
        <div className="text-greenText font-bold text-2xl">{tahsin.kelas}</div>
      </div>
      <hr />
      <div className="text-greenBackground font-bold">
        Ust. {tahsin.PengajarTahsin?.nama}
      </div>
      <ul>
        {kategori === "Tahsin Dewasa"
          ? tahsin.PesertaTahsinDewasas.map((peserta, index) => (
              <li
                key={peserta.id}
                className="text-neutral-600"
              >
                {index + 1}. {peserta.nama}
              </li>
            ))
          : tahsin.PesertaTahsinAnaks.map((peserta, index) => (
              <li
                key={peserta.id}
                className="text-neutral-600"
              >
                {index + 1}. {peserta.nama_anak}
              </li>
            ))}
      </ul>
    </div>
  );
};

const FilteredTahsinCards = () => {
  const [kategori, setKategori] = useState("Tahsin Dewasa");
  const [hari, setHari] = useState("Senin & Rabu");
  const [tahsinsDewasaData, SetTahsinsDewasaData] = useState([]);
  const [tahsinsAnakData, SetTahsinsAnakData] = useState([]);

  const fetchTahsin = async () => {
    try {
      const res = await getData("/kelasTahsinDewasa");
      const res2 = await getData("/kelasTahsinAnak");
      const res3 = await getData("/pesertaTahsinDewasa");
      const datas = res.data.data;
      const datas2 = res2.data.data;
      const datas3 = res3.data.data;
      SetTahsinsDewasaData(datas);
      SetTahsinsAnakData(datas2);
      setPesertaTahsinDewasa(datas3);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTahsin();
  }, []);

  const dataTahsins = [
    {
      id: 1,
      kategori: "Tahsin Dewasa",
      data: tahsinsDewasaData,
    },
    {
      id: 2,
      kategori: "Tahsin Anak",
      data: tahsinsAnakData,
    },
  ];

  // Buat Set untuk menyimpan nilai unik dari h.Jadwal.hari
  const uniqueHariSet = new Set();

  const filteredTahsins = filterTahsinData(dataTahsins, kategori, hari);

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`  flex flex-col gap-10`}>
        {/* Judul dan Deskripsi */}
        <div className="flex flex-col justify-center items-center text-center gap-9">
          <h1 className="text-judul ">{kategori}</h1>
          <p className="w-full sm:w-[90%] md:w-[70%]">
            Tahsin adalah kegiatan yang diadakan sebagai salah satu program
            unggulan di Masjid RJIC Pekanbaru. Tahsin tersedia untuk ikhwan
            ataupun akhawat dan tersedia juga opsi hari yang bervariasi.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row  gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-black">
                Pilih Kategori:
              </label>
              {/* Badge Kategori Tahsin */}
              <div className="flex flex-wrap flex-row gap-2">
                {dataTahsins.map((tahsin) => (
                  <option
                    className={`px-4 py-2  rounded-md shadow-sm cursor-pointer text-sm  ${
                      kategori === tahsin.kategori
                        ? "bg-greenText text-white font-bold"
                        : "hover:bg-yellow  bg-white hover:scale-105 transition"
                    }`}
                    key={tahsin.id}
                    onClick={() => {
                      setKategori(tahsin.kategori);
                    }}
                  >
                    {tahsin.kategori}
                  </option>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-black">
                Pilih Hari:
              </label>
              {/* Badge Hari*/}
              <div className="flex flex-wrap flex-row gap-2">
                {dataTahsins
                  .filter((tahsin) => tahsin.kategori === kategori)
                  .map((tahsin) =>
                    tahsin.data.map((h) => {
                      uniqueHariSet.add(h.Jadwal.hari); // Tambahkan ke Set
                      return null; // Perhatikan, kita hanya return null di sini
                    })
                  )}
                {Array.from(uniqueHariSet).map((uniqueHari, index) => (
                  <option
                    className={`px-4 py-2  rounded-md shadow-sm cursor-pointer text-sm  ${
                      hari === uniqueHari
                        ? "bg-greenText text-white font-bold"
                        : "hover:bg-yellow  bg-white hover:scale-105 transition"
                    }`}
                    key={index}
                    onClick={() => {
                      setHari(uniqueHari);
                    }}
                  >
                    {uniqueHari}
                  </option>
                ))}
              </div>
            </div>
          </div>
          <div className="filtered-tahsins grid grid-cols-1  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-start">
            {filteredTahsins[0].data.map((tahsin, index, array) => (
              <div key={tahsin.id}>
                <TahsinCard
                  tahsin={tahsin}
                  data={array}
                  kategori={kategori}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen Utama
function TahsinIkhwan() {
  return (
    <div
      className={`${styles.paddingX} ${styles.flexCenter} pt-[60px] bg-Gray1`}
    >
      <div className={`${styles.boxWidth}  my-20 flex flex-col gap-20`}>
        <div className="flex flex-col gap-4">
          <FilteredTahsinCards />
        </div>
      </div>
    </div>
  );
}

export default TahsinIkhwan;
