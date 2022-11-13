import { AppConst } from "./../constant/AppConst";
import axios from "axios";
import config from "./Config";
import { shift } from "../interface/Interface";

export class SheduleService {
  public static async post(data: any) {
    try {
      const response = await axios({
        method: "post",
        url: AppConst.apiBaseUrl + "attendance",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response;
    } catch (e) {
      return e;
    }
  }
}
