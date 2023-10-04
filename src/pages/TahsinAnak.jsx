import React, { useState } from "react";
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
            peserta: ["Nonononoo", "Naufal", "Hanif", "Abdul"],
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
    <div className="card">
      <h2>{kelas.namaKelas}</h2>
      <p>Pemateri: {kelas.pemateri}</p>
      <ul>
        {kelas.peserta.map((peserta) => (
          <li key={peserta}>{peserta}</li>
        ))}
      </ul>
    </div>
  );
};

// Komponen utama untuk menampilkan hasil filter untuk setiap kategori dan hari yang aktif
const FilteredTahsinCards = ({ kategori, hari }) => {
  const filteredTahsins = filterTahsinData(tahsins, kategori, hari);

  return (
    <div className="filtered-tahsins">
      {filteredTahsins.map((tahsin) => (
        <div key={tahsin.id}>
          <h1>{tahsin.kategori}</h1>
          {tahsin.hari.map((h) => (
            <div key={h.namaHari}>
              <h2>{h.namaHari}</h2>
              {h.kelas.map((kelas) => (
                <TahsinCard key={kelas.namaKelas} kelas={kelas} />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Contoh penggunaan komponen FilteredTahsinCards
function App() {
  const [kategori, setKategori] = useState("Tahsin Ikhwan");
  const [hari, setHari] = useState("Senin dan Rabu");

  const handleKategoriChange = (event) => {
    setKategori(event.target.value);
  };

  const handleHariChange = (event) => {
    setHari(event.target.value);
  };

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} pt-[60px] bg-Gray1`}>
      <div className={`${styles.boxWidth}  my-20 flex flex-col gap-20`}>
        <div className="App">
          <div>
            <label htmlFor="kategori">Pilih Kategori:</label>
            <select id="kategori" onChange={handleKategoriChange} value={kategori}>
              <option value="Tahsin Ikhwan">Tahsin Ikhwan</option>
              <option value="Tahsin Akhwat">Tahsin Akhwat</option>
              {/* Tambahkan opsi kategori lainnya di sini */}
            </select>
          </div>
          <div>
            <label htmlFor="hari">Pilih Hari:</label>
            <select id="hari" onChange={handleHariChange} value={hari}>
              <option value="Senin dan Rabu">Senin dan Rabu</option>
              <option value="Selasa dan Kamis">Selasa dan Kamis</option>
              <option value="Jumat dan Ahad">Jumat dan Ahad</option>
            </select>
          </div>
          <FilteredTahsinCards kategori={kategori} hari={hari} />
        </div>
      </div>
    </div>
  );
}

export default App;
