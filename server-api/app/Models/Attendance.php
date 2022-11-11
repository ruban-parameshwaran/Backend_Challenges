<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    protected $fillable = [
        'emp_id',
        'checkin',
        'checkout',
        'total_working_hours'
    ];



    // relationship

    public function employee () {
        return $this->belongsTo(Employee::class,'emp_id');
    }

}
