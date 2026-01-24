import type { Ciclo } from "@/interfaces/Ciclo";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "./auth";

export const useCiclosStore = defineStore("ciclos", () => {
  const ciclos = ref<Ciclo[]>([]);
  const authStore = useAuthStore();

  const message = ref<string | null>(null);
  const messageType = ref<"success" | "error">("success");

  function setMessage(text: string, type: "success" | "error", timeout = 5000) {
    message.value = text;
    messageType.value = type;

    setTimeout(() => {
      message.value = null;
      messageType.value = "success";
    }, timeout);
  }

  // Obtener todos los ciclos
  async function fetchCiclos() {
    const response = await fetch("http://localhost:8000/api/ciclos", {
      method: "GET",
      headers: authStore.token
        ? {
            Authorization: `Bearer ${authStore.token}`,
            Accept: "application/json",
          }
        : {
            Accept: "application/json",
          },
    });

    const data = await response.json();
    ciclos.value = data as Ciclo[];
  }

  async function createCiclo(nombre: string, familia_profesional_id: number) {
    const response = await fetch("http://localhost:8000/api/ciclos", {
      method: "POST",
      headers: {
        Authorization: authStore.token ? `Bearer ${authStore.token}` : "",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, familia_profesional_id }),
    });

    const data = await response.json();

    if (!response.ok) {
      setMessage(
        data.message || "Error desconocido, inténtalo más tarde",
        "error",
      );
      return false;
    } else {
      setMessage(data.message || "Ciclo creado correctamente", "success");
      return true;
    }
  }

  function getCiclosPorFamilia(id_familia: number) {
    return ciclos.value.filter(
      (ciclo) => ciclo.familia_profesional_id === id_familia,
    );
  }

  async function uploadCSV(formData: FormData) {
    const response = await fetch("http://localhost:8000/api/ciclos/importar", {
      method: "POST",
      headers: {
        Authorization: authStore.token ? `Bearer ${authStore.token}` : "",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      setMessage(
        data.message || "Error desconocido, inténtalo más tarde",
        "error",
      );
      return false;
    } else {
      setMessage(data.message || "Datos insertados correctamente", "success");
      return true;
    }
  }

  async function downloadPlantillaCSV() {
    const response = await fetch("http://localhost:8000/api/ciclos/plantilla", {
      method: "GET",
      headers: {
        Authorization: authStore.token ? `Bearer ${authStore.token}` : "",
        Accept: "text/csv",
      },
    });

    if (!response.ok) {
      setMessage("Error desconocido, inténtalo más tarde", "error");
    }

    const data = await response.blob();

    return data;
  }

  return {
    ciclos,
    message,
    messageType,
    fetchCiclos,
    createCiclo,
    getCiclosPorFamilia,
    uploadCSV,
    downloadPlantillaCSV,
  };
});
