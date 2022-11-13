<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    // relationship

    public function manager(){
        return $this->hasOne(Manager::class,'manager_id');
    }

    public function employee(){
        return $this->hasMany(Employee::class,'employee_id');
    }
}
