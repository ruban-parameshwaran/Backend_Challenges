<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'shift_id',
        'location_id'
    ];

    // relationships

    public function employee() {
        return $this->belongsTo(Employee::class);
    }

    public function location() {
        return $this->belongsTo(Location::class);
    }

    public function shift() {
        return $this->belongsTo(Shifts::class);
    }

}
