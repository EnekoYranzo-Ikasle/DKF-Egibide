<?php

namespace App\Http\Controllers;

use App\Models\Empresas;
use Illuminate\Http\Request;

class EmpresasController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index() {
        return Empresas::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {
        $validated = $request->validate([
            'nombre' => ['required'],
            'cif' => ['required'],
            'telefono' => ['required'],
            'email' => ['required'],
            'direccion' => ['required']
        ]);

        Empresas::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Empresa agregada correctamente'
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Empresas $empresas) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Empresas $empresas) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Empresas $empresas) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Empresas $empresas) {
        //
    }
}
