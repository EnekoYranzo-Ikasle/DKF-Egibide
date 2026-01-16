<?php

namespace App\Http\Controllers;

use App\Models\FamiliaProfesional;
use Illuminate\Http\Request;

class FamiliaProfesionalController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index() {
        return FamiliaProfesional::all();
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(FamiliaProfesional $familiaProfesional) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FamiliaProfesional $familiaProfesional) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FamiliaProfesional $familiaProfesional) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FamiliaProfesional $familiaProfesional) {
        //
    }
}
