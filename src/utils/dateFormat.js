import { format, parseISO } from "date-fns";

export function formatTanggal(waktu) {
  const tanggal = parseISO(waktu); // Parsing tanggal dari string ISO
  const formatTgl = format(tanggal, "dd.MM.yyyy"); // Format tanggal dalam bahasa Indonesia

  return formatTgl;
}
