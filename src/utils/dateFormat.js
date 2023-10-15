import moment from "moment";

const formatTanggal = (waktu) => {
  const tanggal = moment(waktu);
  const formatTgl = tanggal.format("DD MMM YYYY");

  moment.locale("id", {
    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agst_Sept_Okt_Nov".split("_"),
    monthsParseExact: true,
  });
  moment.locale("id");

  return formatTgl;
};

const formatTanggalFullAngka = (waktu) => {
  const tanggal = moment(waktu);
  const formatTgl = tanggal.format("DD/MM/YYYY");

  moment.locale("id", {
    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agst_Sept_Okt_Nov".split("_"),
    monthsParseExact: true,
  });
  moment.locale("id");

  return formatTgl;
};

export { formatTanggal as default, formatTanggalFullAngka };
