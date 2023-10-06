import styles from "../style";
import { Select, Space } from "antd";
import Button from "../components/Button";

const linkKajian = [
  {
    id: 1,
    namaKajian: `Kajian Tafsir As-Sa'dy`,
    pemateri: "Ust. Dr.Aspri Rahmat Azai MA.",
    linkKajian: [
      {
        judul: "Surat Muhammad Ayat 1-5 (1) ",
        tglUpload: "22 Oktober 2023",
        link: "www.gogle.com",
      },
      {
        judul: "Surat Muhammad Ayat 1-5 (2)  ",
        tglUpload: "24 Oktober 2023",
        link: "www.gogle.com",
      },
      {
        judul: "Surat Muhammad Ayat 5-7",
        tglUpload: "26 Oktober 2023",
        link: "www.gogle.com",
      },
      {
        judul: "Surat Muhammad Ayat 8",
        tglUpload: "28 Oktober 2023",
        link: "www.gogle.com",
      },
      {
        judul: "Surat Muhammad Ayat 9-10 (1) ",
        tglUpload: "1 November 2023",
        link: "www.gogle.com",
      },
    ],
  },
  {
    id: 2,
    namaKajian: `Kajian Tematik`,
    pemateri: "Ust. Jefri Halim Lc,MA.",
    linkKajian: [
      {
        judul: "Akhlak para Sahabat",
        tglUpload: "22 Oktober 2023",
        link: "www.gogle.com",
      },
      {
        judul: "Keutamaan menjadi Amanah  ",
        tglUpload: "24 Oktober 2023",
        link: "www.gogle.com",
      },
      {
        judul: "Akhlak terhadap Orang Tua",
        tglUpload: "26 Oktober 2023",
        link: "www.gogle.com",
      },
      {
        judul: "Pentingnya sahabat dalam beragama",
        tglUpload: "28 Oktober 2023",
        link: "www.gogle.com",
      },
      {
        judul: "Menapaki jejak para Nabi dan Rasul",
        tglUpload: "1 November 2023",
        link: "www.gogle.com",
      },
    ],
  },
];

const LinkKajian = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} pt-[60px]`}>
      <div className={`${styles.boxWidth}  my-20 flex flex-col gap-20`}>
        {/* Judul dan Deskripsi */}
        <div className="flex flex-col justify-center items-center text-center gap-9">
          <h1 className="text-judul ">Link Kajian</h1>
          <p className="w-full sm:w-[90%] md:w-[70%]">
            Disini kamu bisa mencari link kajian yang ada di masjid RJIC
            berdasarkan kategori dan ustad, kajian yang ada di sini adalah
            pengarsipan kajian yang ada di youtube.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Filter */}
          <div className="flex flex-col xs:flex-row gap-5">
            {/* Pilih Nama Kajian */}
            <div className="flex flex-col gap-1 items-start">
              <p className="text-xs font-bold text-black">Pilih kajian:</p>
              <Space wrap>
                <Select
                  defaultValue="Semua"
                  style={{
                    width: 200,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "Semua",
                      label: "Semua",
                    },
                    {
                      value: "Tafsir As-Sa'dy",
                      label: "Tafsir As-Sa'dy",
                    },
                    {
                      value: "Kajian Tematik",
                      label: "Kajian Tematik",
                    },
                  ]}
                />
              </Space>
            </div>
            {/* Pilih Ustad */}
            <div className="flex flex-col gap-1 items-start">
              <p className="text-xs font-bold text-black">Pilih ustadz:</p>
              <Space wrap>
                <Select
                  defaultValue="Semua"
                  style={{
                    width: 200,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "Semua",
                      label: "Semua",
                    },
                    {
                      value: "Ust. Ahmad Doni Lc.",
                      label: "Ust. Ahmad Doni Lc.",
                    },
                    {
                      value: "Ust. Maududi Abdullah Lc.",
                      label: "Ust. Maududi Abdullah Lc.",
                    },
                  ]}
                />
              </Space>
            </div>
          </div>

          {/* List */}
          <div>
            <div className="flex flex-col  text-greenText rounded-lg bg-Gray1 px-6 py-2 ">
              <h1 className="font-bold text-2xl">Kajian Tafsir As-Sa'dy</h1>
              <h2 className="font-semibold">Ust Dr. Aspri Rahmat Azai</h2>
            </div>
            <div className="flex flex-col  text-neutral-600 ">
              <div className="flex flex-row gap-4 px-6 py-1 items-center">
                <div className="text-sm font-medium">Surat Muhammad 1-5</div>
                <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full outline-1 text-white hover:text-black text-xs">
                  Link
                </div>
              </div>
              <div className="flex flex-row gap-4 px-6 py-1 items-center bg-slate-50 ">
                <div className="text-sm font-medium">Surat Muhammad 1-5</div>
                <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full text-white hover:text-black text-xs">
                  Link
                </div>
              </div>
              <div className="flex flex-row gap-4 px-6 py-1 items-center">
                <div className="text-sm font-medium">Surat Muhammad 1-5</div>
                <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full text-white hover:text-black text-xs">
                  Link
                </div>
              </div>
              <div className="flex flex-row gap-4 px-6 py-1 items-center bg-slate-50 ">
                <div className="text-sm font-medium">Surat Muhammad 1-5</div>
                <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full text-white hover:text-black text-xs">
                  Link
                </div>
              </div>
              <div className="flex flex-row gap-4 px-6 py-1 items-center">
                <div className="text-sm font-medium">Surat Muhammad 1-5</div>
                <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full text-white hover:text-black text-xs">
                  Link
                </div>
              </div>
              <div className="flex flex-row gap-4 px-6 py-1 items-center bg-slate-50 ">
                <div className="text-sm font-medium">Surat Muhammad 1-5</div>
                <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full text-white hover:text-black text-xs">
                  Link
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkKajian;
