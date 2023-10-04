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
];

const TahsinAnak = () => {
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
        <div>
          <h1>Filter Data Tahsins</h1>
          <div>
            <label>Kategori Aktif:</label>
            <select
              value={categoryActive}
              onChange={(e) => setCategoryActive(e.target.value)}
            >
              {/* Tambahkan opsi kategori sesuai data yang ada */}
              {tahsins.map((tahsin) => (
                <option
                  key={tahsin.id}
                  value={tahsin.kategori}
                >
                  {tahsin.kategori}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Hari Aktif:</label>
            <select
              value={hariActive}
              onChange={(e) => setHariActive(e.target.value)}
            >
              {/* Tambahkan opsi hari sesuai data yang ada */}
              {tahsins
                .flatMap((tahsin) => tahsin.hari)
                .map((hari) => (
                  <option
                    key={hari.namaHari}
                    value={hari.namaHari}
                  >
                    {hari.namaHari}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <h2>Hasil Gabungan Filter:</h2>
            <ul>
              {combinedFilter.map((item) => (
                <li key={item.namaKelas || item.kategori}>
                  {/* Tampilkan data sesuai dengan kondisi */}
                  {item.namaKelas || item.kategori}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TahsinAnak;
