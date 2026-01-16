<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class EmpresaSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        DB::table('empresas')->insert([
            [
                'cif' => 'B12345678',
                'nombre' => 'Tech Vitoria SL',
                'telefono' => '945111222',
                'email' => 'rrhh@techvitoria.com',
                'direccion' => 'C/ Florida 10, Edificio nº2, Vitoria-Gasteiz',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'cif' => 'B87654321',
                'nombre' => 'Consulting Araba SL',
                'telefono' => '945333444',
                'email' => 'contacto@consultingaraba.com',
                'direccion' => 'C/ Dato 25, Vitoria-Gasteiz',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'cif' => 'A11122233',
                'nombre' => 'Bilbao Digital SA',
                'telefono' => '944555666',
                'email' => 'people@bilbaodigital.com',
                'direccion' => 'C/ Gran Via, Edificio nº4 Bilbao',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
