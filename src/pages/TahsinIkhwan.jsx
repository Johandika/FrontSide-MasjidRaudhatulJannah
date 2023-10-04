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
            peserta: ["Naufal", "Hanif", "Abdul"],
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
  {
    id: 2,
    kategori: "Tahsin Akhwat",
    hari: [
      {
        namaHari: "Senin dan Rabu",
        kelas: [
          {
            namaKelas: "1A",
            pemateri: "Ust. Yuslan",
            peserta: ["Nanda", "Suim", "Dhea"],
          },
          {
            namaKelas: "2A",
            pemateri: "Ust. Yuslan",
            peserta: ["Okta", "Yola", "Hanif", "Abdul"],
          },
          {
            namaKelas: "2B",
            pemateri: "Ust. Yuslan",

            peserta: ["Reni", "Desi", "Hanif", "Abdul"],
          },
          {
            namaKelas: "3A",
            pemateri: "Ust. Anum",
            peserta: ["Inun", "Anum", "Hanif", "Abdul"],
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
            peserta: ["Nonononoo", "Naufal", "Hanif", "Abdul", "Muna", "Mubarak"],
          },
          {
            namaKelas: "2B",
            pemateri: "Ust. Yuslan",

            peserta: ["johandika", "Naufal", "Hanif", "Abdul"],
          },
          {
            namaKelas: "3A",
            pemateri: "Ust. Anum",
            peserta: ["Nonononoo", "Naufal", "Hanif", "Abdul", "Muna", "Mubarak"],
          },
        ],
      },
      {
        namaHari: "Jumat dan Ahad",
        kelas: [
          {
            namaKelas: "1A",
            pemateri: "Ust. Yuslan",
            peserta: ["Gogogogogo", "Naufal", "Hanif", "Abdul"],
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

// Fungsi untuk melakukan filter berdasarkan kategori dan hari yang aktif
const filterTahsinData = (tahsins, kategori, hari) => {
  return tahsins
    .filter((tahsin) => tahsin.kategori === kategori)
    .map((tahsin) => ({
      ...tahsin,
      hari: tahsin.hari.filter((h) => h.namaHari === hari),
    }))
    .filter((tahsin) => tahsin.hari.length > 0);
};

// Komponen untuk menampilkan data dalam bentuk card
const TahsinCard = ({ kelas }) => {
  return (
    <div className="flex flex-1 justify-start flex-col  bg-white shadow rounded-md p-5 gap-4">
      <div className="text-center">
        <div className="text-greenText font-bold text-2xl">{kelas.namaKelas}</div>
      </div>
      <hr />
      <div className="text-greenBackground font-bold">{kelas.pemateri}</div>
      <ul>
        {kelas.peserta.map((peserta, index) => (
          <li key={peserta}>
            {index + 1}. {peserta}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FilteredTahsinCards = () => {
  const [kategori, setKategori] = useState("Tahsin Ikhwan");
  const [hari, setHari] = useState("Senin dan Rabu");

  const filteredTahsins = filterTahsinData(tahsins, kategori, hari);

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`  flex flex-col gap-10`}>
        {/* Judul dan Deskripsi */}
        <div className="flex flex-col justify-center items-center text-center gap-9">
          <h1 className="text-judul ">{kategori}</h1>
          <p className="w-full sm:w-[90%] md:w-[70%]">
            Tahsin adalah kegiatan yang diadakan sebagai salah satu program unggulan di Masjid RJIC
            Pekanbaru. Tahsin tersedia untuk ikhwan ataupun akhawat dan tersedia juga opsi hari yang
            bervariasi.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row  gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-black">Pilih Kategori:</label>
              {/* Badge Kategori Tahsin */}
              <div className="flex flex-wrap flex-row gap-2">
                {tahsins.map((tahsin) => (
                  <option
                    className={`px-4 py-2  rounded-md shadow-sm cursor-pointer text-sm  ${
                      kategori === tahsin.kategori
                        ? "bg-greenText text-white font-bold"
                        : "hover:bg-yellow  bg-white hover:scale-105 transition"
                    }`}
                    key={tahsin.kategori}
                    onClick={() => {
                      setKategori(tahsin.kategori);
                    }}>
                    {tahsin.kategori}
                  </option>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-black">Pilih Hari:</label>
              {/* Badge Hari*/}
              <div className="flex flex-wrap flex-row gap-2">
                {tahsins
                  .filter((tahsin) => tahsin.kategori === kategori)
                  .map((tahsin) =>
                    tahsin.hari.map((h) => (
                      <option
                        className={`px-4 py-2  rounded-md shadow-sm cursor-pointer text-sm  ${
                          hari === h.namaHari
                            ? "bg-greenText text-white font-bold"
                            : "hover:bg-yellow  bg-white hover:scale-105 transition"
                        }`}
                        key={h.namaHari}
                        onClick={() => {
                          setHari(h.namaHari);
                        }}>
                        {h.namaHari}
                      </option>
                    ))
                  )}
              </div>
            </div>
          </div>
          <div className="filtered-tahsins">
            {filteredTahsins.map((tahsin) => (
              <div key={tahsin.id}>
                {/* <h1>{tahsin.kategori}</h1> */}
                {tahsin.hari.map((h) => (
                  <div key={h.namaHari}>
                    <div className="grid grid-cols-1  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-start">
                      {h.kelas.map((kelas) => (
                        <TahsinCard key={kelas.namaKelas} kelas={kelas} />
                      ))}
                    </div>
                  </div>
                ))}
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
    <div className={`${styles.paddingX} ${styles.flexCenter} pt-[60px] bg-Gray1`}>
      <div className={`${styles.boxWidth}  my-20 flex flex-col gap-20`}>
        <div className="flex flex-col gap-4">
          <FilteredTahsinCards />
        </div>
      </div>
    </div>
  );
}

export default TahsinIkhwan;
