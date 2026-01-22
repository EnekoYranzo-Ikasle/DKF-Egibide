import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "./auth";
import type { Seguimiento } from "@/interfaces/Seguimiento";

export const useSeguimientosStore = defineStore("seguimientos", () => {
  const seguimientos = ref<Seguimiento[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const authStore = useAuthStore();

  async function fetchSeguimientos(alumnoId: number) {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(
        `http://localhost:8000/api/seguimientos/alumno/${alumnoId}`,
        {
          headers: authStore.token
            ? {
                Authorization: `Bearer ${authStore.token}`,
                Accept: "application/json",
              }
            : { Accept: "application/json" },
        }
      );

      if (!response.ok) throw new Error(`Error ${response.status}`);

      const data = await response.json();
      console.log("Seguimientos API:", data);
      seguimientos.value = data as Seguimiento[];
    } catch (err: any) {
      error.value = err.message;
      seguimientos.value = [];
    } finally {
      loading.value = false;
    }
  }

  /**
   * Agrega un nuevo seguimiento para un alumno
   */
  async function agregarSeguimiento(
    alumnoId: number,
    seguimientoData: { fecha: string; descripcion: string }
  ) {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(
        `http://localhost:8000/api/seguimientos/alumno/${alumnoId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(authStore.token ? { Authorization: `Bearer ${authStore.token}` } : {}),
          },
          body: JSON.stringify(seguimientoData),
        }
      );

      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(errorBody.message || `Error ${response.status}`);
      }

      const nuevoSeguimiento: Seguimiento = await response.json();
      seguimientos.value.push(nuevoSeguimiento);
      return nuevoSeguimiento;
    } catch (err: any) {
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  }

  // **Muy importante:** devolver todas las funciones que quieras usar fuera
  return { seguimientos, loading, error, fetchSeguimientos, agregarSeguimiento };
});