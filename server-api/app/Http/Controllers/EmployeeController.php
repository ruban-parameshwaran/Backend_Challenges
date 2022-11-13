<?php

namespace App\Http\Controllers;

use App\Enums\RequestType;
use App\Http\Requests\EmployeeRequest;
use App\Http\Resources\EmployeeResource;
use App\Services\AttendanceService;
use Exception;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{       
    protected $table = "attendances";

    public function __construct(private AttendanceService $attService)
    {
            $this->attService = $attService;
    }

    public function store(EmployeeRequest $request) {
        try{
            $employee = $this->attService->employeeStore($request->all());
            $data =  new EmployeeResource($employee);

            return response()->json([
                "message" => true,
                "data" => $data
            ],RequestType::CODE_201);

        }catch(Exception $e){
            return response()->json([
                "message" => false,
                "data" => $e->getMessage()
            ],$e->getCode());
        }
    }

    public function statistics() {
        try{
            $employee = $this->attService->getAllEmployeeList();
            $employeeWorkingHours = $this->attService->getAllAttendaceList();
            $dataArray = [];
            $obj = (object)[];

            $totalEmployee = count($employee);
            $totalWorkingHours = collect($employeeWorkingHours)->pluck('total_working_hours');
            $totalHours = 0;

            foreach($totalWorkingHours as $hours){
                // calculate total working hours
                $totalHours += (int)$hours;
            }   

            $obj->totalEmployees = $totalEmployee;
            $obj->totalWorkingHours = $totalHours;
            
            array_push($dataArray,$obj);
            return response()->json([
                "message" => true,
                "data" => $dataArray
            ],RequestType::CODE_201);

        }catch(Exception $e){
            return response()->json([
                "message" => false,
                "data" => $e->getMessage()
            ],$e->getCode());
        }
    }

}
