import type { Empresa } from "./Empresa";

export interface Estancia {
  id: number;
  puesto: string | null;
  fecha_inicio: string | null;
  fecha_fin: string | null;
  horas_totales: number | null;
  empresa_id: number | null;
  empresa?: Empresa | null;
}