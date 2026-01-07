export type CockpitEvent = {
    // Diese Felder sind "best guess".
    // Wenn du mir 1 JSON Beispiel gibst, typisiere ich dir das exakt.
    title?: string;
    name?: string;

    start?: string; // ISO
    end?: string;   // ISO

    location?: string;
    room?: string;

    description?: string;
};

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getEvents(limit: number): Promise<CockpitEvent[]> {
    if (!BASE_URL) throw new Error("VITE_API_BASE_URL ist nicht gesetzt");

    const url = `${BASE_URL}/api/v1/events/${limit}`;

    const res = await fetch(url, {
        headers: { Accept: "application/json" },
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
    }

    return res.json();
}