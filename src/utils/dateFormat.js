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

export {
  formatTanggal as default,
  formatTanggalFullAngka,
  formatTanggalBulanText,
};
