import axios from "axios";

const BASE_URL = "http://api.indecisionbook.com";

export const client = axios.create({
  baseURL: BASE_URL,
});
