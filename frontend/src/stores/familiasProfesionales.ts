import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "./auth";
import type { FamiliaProfesional } from "@/interfaces/FamiliaProfesional";

export const useFamiliaProfesionalesStore = defineStore(
  "familiasProfesionales",
  () => {
    const familiasProfesionales = ref<FamiliaProfesional[]>([]);
    const authStore = useAuthStore();

    async function fetchFamiliasProfesionales() {
      const response = await fetch(
        "http://localhost:8000/api/familiasProfesionales",
        {
          headers: authStore.token
            ? {
                Authorization: `Bearer ${authStore.token}`,
                Accept: "application/json",
              }
            : {
                Accept: "application/json",
              },
        },
      );

      if (!response.ok) return false;

      const data = await response.json();
      familiasProfesionales.value = data as FamiliaProfesional[];
      return true;
    }

    return { familiasProfesionales, fetchFamiliasProfesionales };
  },
);
