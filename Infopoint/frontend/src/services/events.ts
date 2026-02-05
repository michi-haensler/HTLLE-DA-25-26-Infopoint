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

export async function getEvents(limit: number): Promise<CockpitEvent[]> {
    const res = await fetch(`/api/v1/events/${limit}`, {
        headers: { Accept: "application/json" },
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
    }

    return res.json();
}