<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GroupCompany extends Model
{
    use HasFactory;

    // relationship

    public function parentCompany(){
        return $this->belongsTo(Company::class,'company_id');
    }

    public function employee(){
        return $this->hasMany(Employee::class,'group_company_id');
    }
}
