<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    // relationships

    public function location(){
        return $this->hasMany(Location::class,'company_id');
    }

    public function asset(){
        return $this->hasMany(Assets::class,'company_id');
    }
}
