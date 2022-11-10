<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    protected $casts = [
        'checkin' => 'date:hh:mm',
        'checkout' => 'date:hh:mm'
    ];

    // relationship

    public function employee () {
        return $this->hasOne(Employee::class);
    }

}
