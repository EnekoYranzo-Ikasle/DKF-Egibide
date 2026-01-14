<script setup lang="ts">
import { ref } from "vue";

const nombreCiclo = ref<String>("");
const familiaProfesional = ref<String>("");
</script>

<template>
  <h2>NUEVO CICLO</h2>
  <hr />
  <form @submit.prevent="" class="row-cols-1">
    <div class="mb-3 col-6">
      <label for="ciclo" class="form-label">Nombre:</label>
      <input
        type="text"
        class="form-control"
        placeholder="Desarrollo de aplicaciónes web, Soldadura..."
        v-model="nombreCiclo"
        aria-label="Ciclo"
        id="ciclo"
        required
      />
    </div>

    <div class="mb-3 col-5">
      <label for="ciclo" class="form-label">Familia profesional:</label>
      <select
        class="form-select"
        aria-label="Familia profesional"
        v-model="familiaProfesional"
      >
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
