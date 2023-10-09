// Fetch berguna untuk CRUD data menggunakan axios, dipisah filenya karena biar tinggal panggil-panggil aja di semua file lain yang membutuhkan
import axios from "axios";
import { config } from "../configs";

export async function getData(url, params) {
  const res = await axios({
    url: `${config.api_host_dev}${url}`,
    method: "GET",
    headers: {
      api_key: config.api_key,
    },
  });
  return res;
}
