
import type { Empresa } from "@/interfaces/Empresa";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "./auth";

export const useEmpresasStore = defineStore('empresas', () => {
  const empresas = ref<Empresa[]>([]);
  const authStore = useAuthStore(); // Para el token si la API es protegida

  // Obtener todos las competencias
  async function fetchEmpresas() {
    const response = await fetch('http://localhost:8000/api/empresas', {
      headers: authStore.token ? {
        'Authorization': `Bearer ${authStore.token}`,
        'Accept': 'application/json',
      } : {
        'Accept': 'application/json',
      },
    });

    const data = await response.json();
    empresas.value = data as Empresa[];
  }

  return { empresas, fetchEmpresas };
  });

/*
import type { Empresa } from "@/interfaces/Empresa";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "./auth";

export const useEmpresasStore = defineStore("empresas", () => {
  const empresas = ref<Empresa[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const authStore = useAuthStore();

  async function fetchEmpresas() {
    const response = await fetch("http://localhost:8000/api/empresas", {
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
    empresas.value = data as Empresa[];
  }

  async function fetchMiEmpresa() {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch("http://localhost:8000/api/me/empresa", {
        headers: authStore.token
          ? {
              Authorization: `Bearer ${authStore.token}`,
              Accept: "application/json",
            }
          : {
              Accept: "application/json",
            },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Error al cargar empresa");
      }

      const data = await response.json();

      empresas.value = Array.isArray(data) ? (data as Empresa[]) : ([data] as Empresa[]);
    } catch (err: any) {
      error.value = err.message ?? "Error desconocido";
      empresas.value = [];
    } finally {
      loading.value = false;
    }
  }

  return { empresas, loading, error, fetchEmpresas, fetchMiEmpresa };
});
*/