<script setup lang="ts">
import { ref } from "vue";

const tipoCompetencia = ref<string>("tecnica");
const familiaProfesional = ref<string>("");
const ciclo = ref<string>("");
const descripcion = ref<string>("");
</script>

<template>
  <h2>NUEVA COMPETENCIA</h2>
  <hr />
  <form @submit.prevent="" class="row-cols-1">
    <div class="mb-3">
      <!-- Tipo de competencia -->
      <p>Tipo de competencia</p>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="tipoCompetencia"
          id="tecnica"
          value="tecnica"
          v-model="tipoCompetencia"
        />
        <label class="form-check-label" for="tecnica"> Técnica </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="tipoCompetencia"
          id="transversal"
          value="transversal"
          v-model="tipoCompetencia"
        />
        <label class="form-check-label" for="transversal"> Transversal </label>
      </div>
    </div>

    <!-- Familia profesional -->
    <div class="mb-3 col-5">
      <label for="familiaProfesional" class="form-label"
        >Familia profesional:</label
      >
      <select
        class="form-select"
        aria-label="Familia profesional"
        v-model="familiaProfesional"
        id="familiaProfesional"
      >
        <option value="" disabled>-- Selecciona una opción --</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <!-- Descripción de la competencia -->
    <div class="mb-3 col-5">
      <label for="descripcion" class="form-label">Descripción:</label>
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="descripcion"
          style="height: 120px; max-height: 280px"
          v-model="descripcion"
        ></textarea>
        <label for="descripción">Descripción de la competencia</label>
      </div>
    </div>

    <div v-if="tipoCompetencia === 'tecnica'" class="mb-3 col-5">
      <label for="ciclo" class="form-label">Ciclo:</label>
      <select class="form-select" aria-label="Ciclo" v-model="ciclo" id="ciclo">
        <option value="" disabled>-- Selecciona una opción --</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary col-2">Agregar</button>
  </form>
</template>

<style scoped></style>
