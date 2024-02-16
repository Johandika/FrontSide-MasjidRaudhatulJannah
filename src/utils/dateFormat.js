import moment from "moment";

const formatTanggal = (waktu) => {
  const tanggal = moment(waktu);
  const formatTgl = tanggal.format("DD MMM YYYY");

  moment.locale("id", {
    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agst_Sept_Okt_Nov_Des".split("_"),
    monthsParseExact: true,
  });
  moment.locale("id");

  return formatTgl;
};

const formatTanggalBulanText = (waktu) => {
  const tanggal = moment(waktu);
  const formatTgl = tanggal.format("DD MMM YYYY");

  moment.locale("id", {
    monthsShort:
      "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
        "_"
      ),
    monthsParseExact: true,
  });
  moment.locale("id");

  return formatTgl;
};

const formatTanggalFullAngka = (waktu) => {
  const tanggal = moment(waktu);
  const formatTgl = tanggal.format("DD/MM/YYYY");

  moment.locale("id", {
    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agst_Sept_Okt_Nov_Des".split("_"),
    monthsParseExact: true,
  });
  moment.locale("id");

  return formatTgl;
};

function formatWaktuArtikel(rawDate) {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  const date = new Date(rawDate);
  const day = days[date.getUTCDay()];
  const dayOfMonth = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  let hours = date.getUTCHours();
  let minutes = date.getUTCMinutes();
  let ampm = "WIB";

  // Konversi jam ke format 12 jam
  if (hours > 12) {
    hours -= 12;
    ampm = "WITA";
  } else if (hours === 12) {
    ampm = "WITA";
  }

  // Tambahkan nol di depan jam dan menit jika kurang dari 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const formattedDate = `${day}, ${dayOfMonth} ${month} ${year} ${hours}:${minutes} ${ampm}`;
  return formattedDate;
}

export {
  formatTanggal as default,
  formatTanggalFullAngka,
  formatTanggalBulanText,
  formatWaktuArtikel,
};
