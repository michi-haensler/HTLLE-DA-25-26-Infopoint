// --- API mit Timeout & robusten Fallbacks --- //

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080/api";

// Helfer: Fetch mit Timeout (default 3000 ms)
async function getJSON<T>(path: string, timeoutMs = 3000): Promise<T> {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(`${BASE_URL}${path}`, { signal: controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as T;
  } finally {
    clearTimeout(t);
  }
}

// Domänentypen
export type EventItem = { id: string; title: string; date: string; location?: string };
export type Substitution = { id: string; teacher: string; class: string; time: string };
export type RoomPlan = { id: string; room: string; info: string };

// Jede Funktion: versucht API (mit Timeout) -> bei Fehler ODER Timeout -> Fallback
export async function fetchEvents(): Promise<EventItem[]> {
  try {
    return await getJSON<EventItem[]>("/events", 3000);
  } catch {
    return [
      { id: "e1", title: "Tag der offenen Tür", date: "2025-11-22", location: "Aula" },
      { id: "e2", title: "Maturaball", date: "2026-01-20", location: "Kongress Leoben" },
    ];
  }
}

export async function fetchSubstitutions(): Promise<Substitution[]> {
  try {
    return await getJSON<Substitution[]>("/substitutions", 3000);
  } catch {
    return [
      { id: "s1", teacher: "Mag. Huber", class: "4A/BIT", time: "2. EH" },
      { id: "s2", teacher: "DI Mayer", class: "3AHW", time: "4. EH" },
    ];
  }
}

export async function fetchRoomPlans(): Promise<RoomPlan[]> {
  try {
    return await getJSON<RoomPlan[]>("/room-plans", 3000);
  } catch {
    return [
      { id: "r1", room: "E-112", info: "Labor blockiert – Wartung" },
      { id: "r2", room: "B-204", info: "Raumwechsel nach C-105" },
    ];
  }
}