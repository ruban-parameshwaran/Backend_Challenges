<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'file',
        'doc_name',
        'doc_path',
        'doc_extension'
    ];  

    public function company() {
        return $this->belongsTo(Company::class,'company_id');
    }
}
