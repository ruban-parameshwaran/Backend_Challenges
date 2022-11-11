import config from "./Config";

export class AttendanceService {

    public static getTotalWorkingHours = async () => {
        try{
            const response = await config.get('attendance');
            return response;
        }catch(e){
            return e;
        }
    } 

}