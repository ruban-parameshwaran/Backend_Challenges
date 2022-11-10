<?php

namespace App\Services;

use App\Models\Employee;

class AttendanceService {

    public function store(array $employeeData):Employee{
        $employee = Employee::create($employeeData);
        return $employee;
    }

}