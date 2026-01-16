<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alumnos extends Model {
    protected $fillable = [
        'nombre',
        'apellidos',
        'telefono',
        'ciudad',
        'user_id'
    ];
}
