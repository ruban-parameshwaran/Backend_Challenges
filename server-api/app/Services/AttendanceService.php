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

}