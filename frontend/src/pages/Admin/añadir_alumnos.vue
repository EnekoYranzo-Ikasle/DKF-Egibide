<script setup lang="ts">
import Toast from "@/components/Notification/Toast.vue";
import { useAlumnosStore } from "@/stores/alumnos";
import { ref } from "vue";

const alumnoStore = useAlumnosStore();

const nombre = ref<string>("");
const apellidos = ref<string>("");
const telefono = ref<number>(0);
const poblacion = ref<string>("");

async function agregarAlumno() {
  let ok = false;

  ok = await alumnoStore.createAlumno(
    nombre.value,
    apellidos.value,
    telefono.value,
    poblacion.value,
  );

  if (ok) {
    resetForms();
  }
}

function resetForms() {
  nombre.value = "";
  apellidos.value = "";
  telefono.value = 0;
  poblacion.value = "";
}
</script>

<template>
  <h2>NUEVO ALUMNO</h2>
  <hr />
  <Toast
    v-if="alumnoStore.message"
    :message="alumnoStore.message"
    :messageType="alumnoStore.messageType"
  />
  <form @submit.prevent="agregarAlumno" class="row-cols-1">
    <div class="mb-3 col-5">
      <label for="nombre" class="form-label">Nombre:</label>
      <input
        type="text"
        class="form-control"
        placeholder="Markel"
        v-model="nombre"
        aria-label="nombre"
        id="nombre"
        required
      />
    </div>

    <div class="mb-3 col-5">
      <label for="apellido" class="form-label">Apellidos:</label>
      <input
        type="text"
        class="form-control"
        placeholder="Goikoetxea"
        v-model="apellidos"
        aria-label="apellido"
        id="apellido"
        required
      />
    </div>

    <div class="mb-3 col-2">
      <label for="telefono" class="form-label">Telefono:</label>
      <input
        type="tel"
        class="form-control"
        placeholder="644202601"
        v-model="telefono"
        aria-label="telefono"
        id="telefono"
        required
      />
    </div>

    <div class="mb-3 col-5">
      <label for="poblacion" class="form-label">Población:</label>
      <input
        type="text"
        class="form-control"
        placeholder="Vitoria-Gasteiz, Agurain..."
        v-model="poblacion"
        aria-label="poblacion"
        id="poblacion"
        required
      />
    </div>

    <button type="submit" class="btn btn-primary col-2">Agregar</button>
  </form>
</template>

<style scoped></style>
