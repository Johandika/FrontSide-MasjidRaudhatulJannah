import React, { useCallback, useEffect, useState } from "react";
import styles from "../style";
import { getData } from "../utils/fetch";

// export const kajians = [
//   {
//     id: 1,
//     namaKajian: "Kajian Kitab Tauhid",
//     pemateri: "Ust. Ruslan Zuardi, Lc. MA.",
//     hari: "Selasa",
//     pukul: "5.00 - 08.00",
//   },
//   {
//     id: 2,
//     namaKajian: "Kajian Kitab Tafsir As-Sa'dy",
//     pemateri: "Ust. Dr. Aspri Rahmat Azai, MA.",
//     hari: "Selasa",
//     pukul: "16.00 - 17.30",
//   },
//   {
//     id: 3,
//     namaKajian: "Kajian Akhlak",
//     pemateri: "Ust. Ahmad Doni, Lc.",
//     hari: "Rabu",
//     pukul: "16.00 - 17.30",
//   },
//   {
//     id: 4,
//     namaKajian: "Kajian Kitab Aqidah",
//     pemateri: "Ust. Jefri Halim MA.",
//     hari: "Selasa",
//     pukul: "18.00 - 19.30",
//   },
//   {
//     id: 5,
//     namaKajian: "Kajian Kitab Aqidah",
//     pemateri: "Ust. Jefri Halim MA.",
//     hari: "Rabu",
//     pukul: "18.00 - 19.30",
//   },
//   {
//     id: 6,
//     namaKajian: "Kajian Kitab Aqidah",
//     pemateri: "Ust. Jefri Halim MA.",
//     hari: "Rabu",
//     pukul: "18.00 - 19.30",
//   },
//   {
//     id: 7,
//     namaKajian: "Kajian Kitab Aqidah",
//     pemateri: "Ust. Jefri Halim MA.",
//     hari: "Senin",
//     pukul: "18.00 - 19.30",
//   },
//   {
//     id: 8,
//     namaKajian: "Kajian Kitab Aqidah",
//     pemateri: "Ust. Jefri Halim MA.",
//     hari: "Senin",
//     pukul: "18.00 - 19.30",
//   },
//   {
//     id: 9,
//     namaKajian: "Kajian Kitab Aqidah",
//     pemateri: "Ust. Jefri Halim MA.",
//     hari: "Senin",
//     pukul: "18.00 - 19.30",
//   },
//   {
//     id: 10,
//     namaKajian: "Kajian Kitab Tauhid",
//     pemateri: "Ust. Ruslan Zuardi, Lc. MA.",
//     hari: "Kamis",
//     pukul: "5.00 - 08.00",
//   },
//   {
//     id: 11,
//     namaKajian: "Kajian Kitab Tauhid",
//     pemateri: "Ust. Ruslan Zuardi, Lc. MA.",
//     hari: "Kamis",
//     pukul: "5.00 - 08.00",
//   },
//   {
//     id: 12,
//     namaKajian: "Kajian Kitab Tauhid",
//     pemateri: "Ust. Ruslan Zuardi, Lc. MA.",
//     hari: "Kamis",
//     pukul: "5.00 - 08.00",
//   },
//   {
//     id: 13,
//     namaKajian: "Kajian Kitab Tauhid",
//     pemateri: "Ust. Ruslan Zuardi, Lc. MA.",
//     hari: "Jumat",
//     pukul: "5.00 - 08.00",
//   },
//   {
//     id: 14,
//     namaKajian: "Kajian Kitab Tauhid",
//     pemateri: "Ust. Ruslan Zuardi, Lc. MA.",
//     hari: "Jumat",
//     pukul: "5.00 - 08.00",
//   },
//   {
//     id: 15,
//     namaKajian: "Kajian Kitab Tauhid",
//     pemateri: "Ust. Ruslan Zuardi, Lc. MA.",
//     hari: "Jumat",
//     pukul: "5.00 - 08.00",
//   },
//   {
//     id: 16,
//     namaKajian: "Kajian Kitab Tauhid",
//     pemateri: "Ust. Ruslan Zuardi, Lc. MA.",
//     hari: "Sabtu",
//     pukul: "5.00 - 08.00",
//   },
//   {
//     id: 17,
//     namaKajian: "Kajian Kitab Tafsir As-Sa'dy",
//     pemateri: "Ust. Dr. Aspri Rahmat Azai, MA.",
//     hari: "Sabtu",
//     pukul: "16.00 - 17.30",
//   },
//   {
//     id: 18,
//     namaKajian: "Kajian Akhlak",
//     pemateri: "Ust. Ahmad Doni, Lc.",
//     hari: "Sabtu",
//     pukul: "16.00 - 17.30",
//   },
//   {
//     id: 19,
//     namaKajian: "Kajian Kitab Tauhid",
//     pemateri: "Ust. Ruslan Zuardi, Lc. MA.",
//     hari: "Minggu",
//     pukul: "5.00 - 08.00",
//   },
//   {
//     id: 20,
//     namaKajian: "Kajian Kitab Tafsir As-Sa'dy",
//     pemateri: "Ust. Dr. Aspri Rahmat Azai, MA.",
//     hari: "Minggu",
//     pukul: "16.00 - 17.30",
//   },
//   {
//     id: 21,
//     namaKajian: "Kajian Akhlak",
//     pemateri: "Ust. Ahmad Doni, Lc.",
//     hari: "Minggu",
//     pukul: "16.00 - 17.30",
//   },
// ];

const Kajian = () => {
  const [dataKajianRutin, setDataKajianRutin] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [kajian, setKajian] = useState([]);

  const fetchDataKajianRutin = useCallback(async () => {
    try {
      const res = await getData("/kajian/rutin");
      const datas = res.data.data;
      setDataKajianRutin(datas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchDataKajianRutin();
  }, [fetchDataKajianRutin]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const daysOfWeek = [
    "Ahad",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
  ];

  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const day = daysOfWeek[currentDate.getDay()];
  const date = currentDate.getDate();
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  // Fungsi untuk membandingkan waktu_kajian_rutin
  const compareWaktu = (a, b) => {
    // Konversi waktu menjadi format yang bisa dibandingkan (misal: jam)
    const waktuA = parseInt(a.waktu_kajian_rutin.split(" - ")[0], 10);
    const waktuB = parseInt(b.waktu_kajian_rutin.split(" - ")[0], 10);

    // Bandingkan waktu
    if (waktuA < waktuB) {
      return -1;
    }
    if (waktuA > waktuB) {
      return 1;
    }
    return 0;
  };

  // Menggunakan fungsi compareWaktu untuk mengurutkan data
  // const dataUrutkan = data.sort(compareWaktu);

  return (
    <div
      className={`${styles.paddingX} ${styles.flexCenter} pt-[60px] bg-Gray1`}
    >
      <div className={`${styles.boxWidth}  my-20 flex flex-col gap-20`}>
        {/* Kajian Hari Ini */}
        <div className="flex flex-col gap-20 ">
          {/* Judul dan Deskripsi */}
          <div className="flex flex-col justify-center items-center text-center gap-9">
            <h1 className="text-judul ">Jadwal Kajian Rutin</h1>
            <p className="w-full sm:w-[90%] md:w-[70%]">
              Kajian rutin adalah kajian yang dilaksanakan setiap pekan di
              Masjid Raudhatul Jannah Pekanbaru secara intensif dan
              berkelanjutan. Biasanya membahas sebuah kitab dan dihadiri oleh
              jama'ah yang tetap.
            </p>
          </div>
          {/* Card Kajian Hari Ini */}
          <div className="flex flex-row w-full xs:w-4/5 sm:w-2/3 lg:w-1/3 mx-auto relative">
            <div className="cursor-default absolute -top-5 right-0 btn-grad rounded-full py-2 px-6 text-white shadow-md shadow-red-600 text-sm ">
              Ayo Hadir 👋
            </div>
            <div className="flex flex-col flex-1 bg-white shadow  rounded-md p-5 gap-4">
              <div className="text-center">
                <div className="text-greenText font-bold text-2xl">
                  Kajian Hari Ini
                </div>
                <div className="text-xs  text-neutral-500">
                  ({day}, {date} {month} {year})
                </div>
              </div>
              <hr />
              {dataKajianRutin
                .filter((kajian) => kajian.Jadwal.hari === day)
                .map((kajian, index, array) => (
                  <React.Fragment key={kajian.id}>
                    <div className="flex flex-row gap-6">
                      <div className="flex flex-col flex-1 gap-4">
                        <div>
                          <div className="text-greenText font-bold">
                            {kajian.tema}
                          </div>
                          <div className="text-neutral-500 font-base">
                            {kajian.Ustadz?.nama}
                          </div>
                          <div className="text-neutral-500 font-bold">
                            {kajian.waktu_kajian_rutin}
                          </div>
                        </div>
                        {/* Tambahkan kondisi untuk merender <hr /> */}
                        {index !== array.length - 1 && <hr />}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>
        <hr className="border-slate-300" />
        {/* Card Daftar Kajian Sepekan */}
        <div className="grid grid-cols-1 xs:w-4/5 sm:w-full sm:grid-cols-2 lg:grid-cols-3  gap-5 mx-auto ">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="flex flex-col flex-1 bg-white shadow rounded-md p-5 gap-4"
            >
              <div className="text-center">
                <div className="text-greenText font-bold text-2xl">{day}</div>
              </div>
              <hr />
              {dataKajianRutin
                .filter((kajian) => kajian.Jadwal.hari === day)
                .map((kajian) => (
                  <div
                    key={kajian.id}
                    className="flex flex-row gap-6"
                  >
                    <div className="flex flex-col flex-1 gap-4">
                      <div>
                        <div className="text-greenText font-bold">
                          {kajian.tema}
                        </div>
                        <div className="text-neutral-600 font-base">
                          {kajian.Ustadz?.nama}
                        </div>
                        <div className="text-neutral-600 text-sm font-semibold">
                          {kajian.waktu_kajian_rutin}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kajian;
