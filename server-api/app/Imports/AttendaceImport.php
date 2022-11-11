<?php

namespace App\Imports;

use App\Models\Attendance;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class AttendaceImport implements ToCollection,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $row)
    {
        $arr = [];
        foreach($row as $row){
            $data = [
                "emp_id" => $row['emp_id'],
                "checkin" => $row['checkin'],
                "checkout" => $row['checkout'],
            ];
            $checkIn = Carbon::parse($row['checkin']);
            $checkOut = Carbon::parse($row['checkout']);
            $totalWorkingHours = $checkIn->diff($checkOut)->format('%H:%I:%S');
            $data['total_working_hours'] = $totalWorkingHours;
            Attendance::create($data);
        }
    }
}
