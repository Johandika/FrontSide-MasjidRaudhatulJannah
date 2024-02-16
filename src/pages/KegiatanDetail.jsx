import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils/fetch";
import styles from "../style";
import { formatWaktuArtikel } from "../utils/dateFormat";
import Loading from "./Loading";
import formatPathGambar from "../utils/formatGambar";
import { config } from "../configs";

const KegiatanDetail = () => {
  const { id } = useParams();
  const [kegiatans, setKegiatans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [divisis, setDivisis] = useState([]);

  const fetchData = async () => {
    try {
      const resDivisi = await getData("/divisi");
      const resKegiatan = await getData("/kegiatan");
      const datasKegiatan = resKegiatan.data.data;
      const datasDivisi = resDivisi.data.data;
      setKegiatans(datasKegiatan);
      setDivisis(datasDivisi);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const kegiatanFilter = kegiatans.find((kegiatan) => kegiatan.id === id);
  const kegiatanDivisi = divisis.find(
    (kegiatan) => kegiatan.id === kegiatanFilter.DivisiId
  );

  return loading ? (
    <Loading />
  ) : (
    <div className={`${styles.paddingX} ${styles.flexCenter} pt-[60px]`}>
      <div className={`${styles.boxWidth}  my-20 flex flex-col gap-8`}>
        {/* Judul dan waktu */}
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <h1 className="text-3xl text-greenText font-bold w-full md:w-3/4">
            {kegiatanFilter.tema} menanti seorang ahllli bela diri dimana akan
            ku cari
          </h1>
          <div className="flex flex-row  gap-2 w-full justify-center">
            <p className="w-full sm:w-[90%]  text-gray-400 text-sm">
              <span className="font-medium uppercase">
                {kegiatanDivisi.nama}
              </span>{" "}
              |&ensp;
              {formatWaktuArtikel(kegiatanFilter?.createdAt)}
            </p>
          </div>
        </div>
        {/* Image */}
        <img
          src={`${config.api_image}/${formatPathGambar(
            kegiatanFilter.gambar_kegiatan
          )}`}
          alt={kegiatanFilter.tema}
          className="w-full md:w-2/3 mx-auto rounded-sm max-h-96 object-cover"
        />
        {/* Body */}
        <div className="indent-16">{kegiatanFilter.deskripsi}</div>
      </div>
    </div>
  );
};

export default KegiatanDetail;
