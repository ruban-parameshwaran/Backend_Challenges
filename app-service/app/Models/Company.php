<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "file"
    ];

    public function document() {
        return $this->hasMany(Document::class,'company_id')->orderBy('doc_path');
    }

}
