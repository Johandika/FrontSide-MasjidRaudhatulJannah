import React, { useEffect, useState } from "react";
import styles from "../style";
import { getData } from "../utils/fetch";
import formatTanggal from "../utils/dateFormat";
import { config } from "../configs";
import formatPathGambar from "../utils/formatGambar";
import { Select, Space } from "antd";
import Button from "../components/Button";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const LinkTablighAkbar = () => {
  const [datasTablighAkbar, setDatasTablighAkbar] = useState([]);
  const [datasLinkKajian, setDatasLinkKajian] = useState([]);
  const [selectedValue, setSelectedValue] = useState("Semua");
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const fetchData = async () => {
    try {
      const res = await getData("/kajian/tablighAkbar");
      const res2 = await getData("/linkKajian");
      const datas = res.data.data;
      const datas2 = res2.data.data;
      setDatasTablighAkbar(datas);
      setDatasLinkKajian(datas2);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  // Buat objek set untuk melacak ID yang sudah ditemukan
  const idSet = new Set();

  const options = datasTablighAkbar
    .map((kajian) => ({
      value: kajian.nama_ustadz,
      label: kajian.nama_ustadz,
    }))
    .filter((kajian) => {
      if (!idSet.has(kajian.value)) {
        idSet.add(kajian.value);
        return true;
      }
      return false;
    });

  // Nampilin +4 data
  const loadMoreData = () => {
    setItemsPerPage(itemsPerPage + 4);
  };

  return (
    <div
      className={`${styles.paddingX} ${styles.flexCenter} pt-[60px] bg-Gray1`}
    >
      <div className={`${styles.boxWidth}  my-20 flex flex-col gap-20`}>
        {/* Judul dan Deskripsi */}
        <div className="flex flex-col justify-center items-center text-center gap-9">
          <h1 className="text-judul ">Dokumentasi Tabligh Akbar</h1>
          <p className="w-full sm:w-[90%] md:w-[70%]">
            Disini kamu bisa mencari link kajian yang ada di masjid RJIC
            berdasarkan kategori dan ustad, kajian yang ada di sini adalah
            pengarsipan kajian yang ada di youtube.
          </p>
        </div>
        {/* Filter */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col xs:flex-row gap-5">
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
                    ...options,
                  ]}
                />
              </Space>
            </div>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 text-black">
            {selectedValue === "Semua"
              ? datasTablighAkbar.slice(0, itemsPerPage).map((data) => (
                  <React.Fragment key={data.id}>
                    {(selectedValue === "Semua" ||
                      data.nama_ustadz === selectedValue) && (
                      <Link
                        to={data.link}
                        target="_blank"
                        className="bg-white shadow-md rounded-md overflow-hidden cursor-pointer group transition hover:shadow-neutral-300 flex justify-between flex-col"
                        key={data.id}
                      >
                        <div className="overflow-hidden bg-black">
                          <img
                            src={`${config.api_image}/${formatPathGambar(
                              data.poster_kajian
                            )}`}
                            alt={""}
                            className="w-full h-[150px] object-cover group-hover:scale-105 transition group-hover:duration-700 "
                          />
                        </div>
                        <div className="px-3 pt-3 group-hover:text-greenText">
                          <h1 className="text-lg font-bold  mb-2 ">
                            {data.tema}
                          </h1>
                        </div>
                        <div className="flex flex-col text-sm mt-auto px-3 pb-3 gap-2 group-hover:text-greenText">
                          <div>Ustd. {data.nama_ustadz}</div>
                          <div>
                            Tgl upload : {formatTanggal(data.createdAt)}
                          </div>
                        </div>
                      </Link>
                    )}
                  </React.Fragment>
                ))
              : datasTablighAkbar
                  .filter((data) => data.nama_ustadz === selectedValue)
                  .slice(0, itemsPerPage)
                  .map((data) => (
                    <React.Fragment key={data.id}>
                      {(selectedValue === "Semua" ||
                        data.nama_ustadz === selectedValue) && (
                        <Link
                          to={data.link}
                          target="_blank"
                          className="bg-white shadow-md rounded-md overflow-hidden cursor-pointer group transition hover:shadow-neutral-300 flex justify-between flex-col"
                          key={data.id}
                        >
                          <div className="overflow-hidden bg-black">
                            <img
                              src={`${config.api_image}/${formatPathGambar(
                                data.poster_kajian
                              )}`}
                              alt={data.tema}
                              className="w-full h-[150px] object-cover group-hover:scale-105 transition group-hover:duration-700 "
                            />
                          </div>
                          <div className="px-3 pt-3 group-hover:text-greenText">
                            <h1 className="text-lg font-bold  mb-2 ">
                              {data.tema}
                            </h1>
                          </div>
                          <div className="flex flex-col text-sm mt-auto px-3 pb-3 gap-2 group-hover:text-greenText">
                            <div>Ustd. {data.nama_ustadz}</div>
                            <div>
                              Tgl upload : {formatTanggal(data.createdAt)}
                            </div>
                          </div>
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
          </div>
          <div className="mx-auto mt-14">
            <Button
              label={"Lihat lebih banyak"}
              iconRight={HiOutlineChevronDoubleRight}
              className={"px-8"}
              onClick={loadMoreData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkTablighAkbar;
