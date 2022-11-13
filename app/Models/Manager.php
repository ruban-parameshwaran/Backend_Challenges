<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Manager extends Model
{
    use HasFactory;

    // relationship

    public function company(){
        return $this->belongsTo(Company::class,'company_id');
    }

    public function customer(){
        return $this->hasMany(Customer::class,'manager_id');
    }

}
