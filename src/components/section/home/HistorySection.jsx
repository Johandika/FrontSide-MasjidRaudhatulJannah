import { erje1 } from "../../../assets/images";
import styles from "../../../style";

const HistorySection = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}  my-40 flex flex-col gap-20`}>
          <h1 className="text-judul ">Sejarah RJIC</h1>
          <div className="flex flex-col text-justify  md:flex-row gap-10 ">
            <div className=" object-cover flex-1 md:rounded-r-xl  rounded shadow-xl border-greenBackground overflow-hidden ">
              <img
                src={erje1}
                className=" min-h-full object-cover"
                alt="Erje Masjid"
              />
            </div>
            <div className="w-full h-full flex-1 leading-7">
              <p>
                &emsp;&emsp;&emsp;Masjid Raudhatul Jannah Islamic Center (RJIC)
                atau yang lebih dikenal dengan sebutan Masjid Raudhatul Jannah
                (RJ/Erje) berada di bawah naungan Yayasan Nadwah Islamiah yang
                didirikan oleh Ustadz Armen Halim Naro (rahimahullah). Estafet
                perjuangan kemudian diteruskan oleh Ustadz Maududi Abdullah Lc
                dan Ustadz Dr Aspri Rahmat Azai MA. Kini Masjid RJ diterajui
                oleh Mudir Ustadz Ruslan Zuardi MA.
              </p>
              <p>
                &emsp;&emsp;&emsp; Cikal-bakal Masjid RJ bermula pada tahun
                2010. Ketika itu dapatlah tanah seluas tiga ribu meter persegi
                dari salah seorang muhsinin. Letaknya sangat strategis, di
                jantung Kota Pekanbaru yakni Jalan Tuanku Tambusai. Pada tahun
                2011 dimulailah pembangunan Masjid RJ yang berazzam menjadi
                pusat pembinaan dan penyebaran dakwah ahlussunnah di Provinsi
                Riau. Dana pembangunan berasal dari para muhsinin dalam negeri
                serta dibantu oleh Pemerintah Provinsi Riau sebesar Rp275 juta.
                Berkat pertolongan dan kemudahan dari Allah, donasi pembangunan
                masjid ditutup pada bulan Februari tahun 2018. Dana yang telah
                terkumpul lebih kurang hingga Rp18 miliar. Memiliki ukuran
                bangunan 40 x 45 meter, kapasitas Masjid RJ dapat menampung
                kurang lebih tiga ribu jamaah.
              </p>
              <p>
                &emsp;&emsp;&emsp; Selain sebagai sarana ibadah, tujuan
                pembangunan Masjid RJ adalah sebagai sarana pengkajian,
                pendidikan, dan penyebaran ilmu syar’i yang berlandaskan Al
                Qur’an dan As-Sunnah sesuai dengan pemahaman para sahabat. Tak
                lupa pula sebagai sarana pembinaan akhlak dan meningkatkan
                sumber daya umat di segala bidang. Juga sarana informasi dan
                komunikasi antar kaum muslimin. Visi Masjid RJ adalah menjadi
                pusat dakwah dan kajian Islam di Pekanbaru, Riau yang
                berlandaskan Al Qur’an dan As-Sunnah sesuai dengan pemahaman
                para sahabat. Sedangkan misi Masjid RJ adalah menyebarkan dakwah
                Islam di Pekanbaru, Riau yang berlandaskan Al Qur’an dan
                As-Sunnah sesuai dengan pemahaman para sahabat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistorySection;
