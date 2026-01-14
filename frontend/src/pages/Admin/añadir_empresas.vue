<script setup lang="ts">
import { ref } from "vue";

const nombre = ref<string>("");
const cif = ref<string>("");
const telefono = ref<number>(0);
const email = ref<string>("");
const direccion = ref<string>("");
</script>

<template>
  <h2>NUEVA EMPRESA</h2>
  <hr />
  <form @submit.prevent="" class="row-cols-1">
    <div class="mb-3 col-2">
      <label for="cif" class="form-label">CIF:</label>
      <input
        type="text"
        class="form-control"
        placeholder="12345678A"
        v-model="cif"
        aria-label="Cif"
        id="cif"
        required
      />
    </div>

    <div class="mb-3 col-5">
      <label for="nombre" class="form-label">Nombre:</label>
      <input
        type="text"
        class="form-control"
        placeholder="Empresa S.A"
        v-model="nombre"
        aria-label="nombre"
        id="nombre"
        required
      />
    </div>

    <div class="mb-3 col-2">
      <label for="telefono" class="form-label">Telefono:</label>
      <input
        type="tel"
        class="form-control"
        placeholder="945 000 000"
        v-model="telefono"
        aria-label="Telefono"
        id="telefono"
        required
      />
    </div>

    <div class="mb-3 col-4">
      <label for="email" class="form-label">Email de contacto:</label>
      <input
        type="email"
        class="form-control"
        placeholder="contacto@empresa.com"
        v-model="email"
        aria-label="email"
        id="email"
      />
    </div>

    <div class="mb-3 col-5">
      <label for="direccion" class="form-label">Dirección:</label>
      <input
        type="text"
        class="form-control"
        placeholder="Calle empresa nº2, Edificio..."
        v-model="direccion"
        aria-label="Direccion"
        id="direccion"
        required
      />
    </div>

    <button type="submit" class="btn btn-primary col-2">Agregar</button>
  </form>
</template>

<style scoped></style>
