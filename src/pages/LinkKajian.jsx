import styles from "../style";
import { Select, Space } from "antd";
import Button from "../components/Button";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../utils/fetch";

const LinkKajian = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("Semua");
  const [datasKajian, setDatasKajian] = useState([]);

  const fetchLinkKajian = async () => {
    try {
      const res = await getData("/kajian/rutin");
      const datas = res.data.data;
      setDatasKajian(datas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchLinkKajian();
  }, []);

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  const handleGoToDetail = (id) => {
    navigate(`/linkKajianRutin/${id}`);
  };

  // Buat objek set untuk melacak ID yang sudah ditemukan
  const idSet = new Set();

  const options = datasKajian
    .map((kajian) => ({
      value: kajian.UstadzId,
      label: kajian.Ustadz.nama,
    }))
    .filter((kajian) => {
      if (!idSet.has(kajian.value)) {
        idSet.add(kajian.value);
        return true;
      }
      return false;
    });
  // console.log("options", ...options);
  console.log("idSet", idSet);

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} pt-[60px]`}>
      <div className={`${styles.boxWidth}  my-20 flex flex-col gap-20`}>
        {/* Judul dan Deskripsi */}
        <div className="flex flex-col justify-center items-center text-center gap-9">
          <h1 className="text-judul ">Dokumentasi Kajian Rutin</h1>
          <p className="w-full sm:w-[90%] md:w-[70%]">
            Disini kamu bisa mencari link kajian yang ada di masjid RJIC
            berdasarkan kategori dan ustad, kajian yang ada di sini adalah
            pengarsipan kajian yang ada di youtube.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Filter */}
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

          {/* List */}
          <div>
            {datasKajian.map((kajian) => (
              <React.Fragment key={kajian.id}>
                {(selectedValue === "Semua" ||
                  kajian.Ustadz.id === selectedValue) && (
                  <div className="flex flex-row  rounded-sm bg-gray-50 border-y-[1px] px-6 py-2  ">
                    <div className="flex flex-1 flex-col justify-between ">
                      <h1 className="font-bold text-lg text-greenText ">
                        {kajian.tema}
                      </h1>
                      <h2 className=" text-sm text-black">
                        {kajian.Ustadz.nama}
                      </h2>
                    </div>
                    <div className="flex flex-col text-end justify-between">
                      <div className="text-xs font-medium text-gray-00">
                        Total file : 134
                      </div>
                      <Button
                        label={"Lihat semua"}
                        small
                        className={"px-3 text-xs"}
                        onClick={() => handleGoToDetail(kajian.id)}
                      />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkKajian;
