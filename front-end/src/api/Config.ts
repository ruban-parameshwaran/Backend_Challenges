import { AppConst } from './../constant/AppConst';
import axios from "axios";
const config = axios.create({
    baseURL: AppConst.apiBaseUrl,
    timeout: 1000,
    headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/json'
    }
  });

export default config;