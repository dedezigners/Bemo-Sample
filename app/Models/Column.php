<?php

namespace App\Models;

use App\Models\Card;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Column extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['name'];

    public function cards()
    {
        return $this->hasMany(Card::class);
    }
}
