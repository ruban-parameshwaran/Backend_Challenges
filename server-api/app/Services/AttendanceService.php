<?php

namespace App\Services;

use App\Models\Attendance;
use App\Models\Employee;
use Illuminate\Support\Facades\DB;

class AttendanceService {

    public function index() {
        $data = Attendance::with('employee')->get();
        return $data;
    }

    public function employeeStore(array $employeeData):Employee{
        $employee = Employee::create($employeeData);
        return $employee;
    }

    public function getAllEmployeeList () {
        $stats = DB::table('employees')
                ->select('employees.*')
                ->get();
        return $stats;
    }

    public function getAllAttendaceList () {
        $stats = DB::table('employees')
                ->join('attendances','employees.id','=','attendances.emp_id')
                ->select('employees.name','attendances.total_working_hours')
                ->get();
        return $stats;
    }

}