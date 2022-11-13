<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    // relationship

    public function company(){
        return $this->belongsTo(Company::class,'company_id');
    }

    public function customer(){
        return $this->hasMany(Customer::class,'employee_id');
    }

    public function groupCompany(){
        return $this->belongsTo(GroupCompany::class,'group_company_id');
    }

}
