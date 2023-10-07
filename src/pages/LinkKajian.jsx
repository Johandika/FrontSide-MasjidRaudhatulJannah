import styles from "../style";
import { Select, Space } from "antd";
import Button from "../components/Button";
import { kajians } from "./Kajian";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LinkKajian = () => {
  const [selectedValue, setSelectedValue] = useState("Semua");
  const navigate = useNavigate()

  const handleChange = (value) => {
    setSelectedValue(value); 
  };

  const handleGoToDetail = (id) => {
    navigate(`/linkKajianRutin/${id}`);
  }

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} pt-[60px]`}>
      <div className={`${styles.boxWidth}  my-20 flex flex-col gap-20`}>
        {/* Judul dan Deskripsi */}
        <div className="flex flex-col justify-center items-center text-center gap-9">
          <h1 className="text-judul ">Link Kajian </h1>
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
                    {
                      value: "Ust. Ruslan Zuardi, Lc. MA.",
                      label: "Ust. Ruslan Zuardi, Lc. MA.",
                    },
                    {
                      value: "Ust. Dr. Aspri Rahmat Azai, MA.",
                      label: "Ust. Dr. Aspri Rahmat Azai, MA.",
                    },
                    {
                      value: "Ust. Ahmad Doni, Lc.",
                      label: "Ust. Ahmad Doni, Lc.",
                    },
                    {
                      value: "Ust. Jefri Halim MA.",
                      label: "Ust. Jefri Halim MA.",
                    },
                  ]}
                />
              </Space>
            </div>
          </div>

          {/* List */}
          <div>
            {kajians.map((kajian) => (
              <React.Fragment key={kajian.id}>
                {(selectedValue === "Semua" ||
                  kajian.pemateri === selectedValue) && (
                  <div className="flex flex-row  rounded-sm bg-gray-50 border-y-[1px] px-6 py-2  ">
                    <div className="flex flex-1 flex-col justify-between ">
                      <h1 className="font-bold text-lg text-greenText ">
                        {kajian.namaKajian}
                      </h1>
                      <h2 className=" text-sm text-black">{kajian.pemateri}</h2>
                    </div>
                    <div className="flex flex-col text-end justify-between">
                      <div className="text-xs font-medium text-gray-00">
                        Total file : 134
                      </div>
                      <Button
                        label={"Lihat semua"}
                        small
                        className={"px-3 text-xs"}
                        onClick={()=>handleGoToDetail(kajian.id)}
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
