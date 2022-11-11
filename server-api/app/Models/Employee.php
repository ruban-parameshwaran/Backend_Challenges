<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'position',
        'address',
        'telephone'
    ];

    // relationship

    public function attendance(){
        $this->return->hasMany(Attendance::class,'emp_id');
    }

}
