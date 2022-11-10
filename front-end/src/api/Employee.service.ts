import { AppConst } from './../constant/AppConst';
import axios from "axios";
import config from "./Config";
import { shift } from '../interface/Interface';

export class EmployeeService {

    public static async post(data:any){
        try{
            const response:shift[] = await config.post('employee',data);
            return response;
        }catch(e){
            return e;
        }
    }

    public static async getShiftLists() {
        try{
            const response = await config.get('shift');
            return response;
        }catch(e){
            return e;
        }
    }
}