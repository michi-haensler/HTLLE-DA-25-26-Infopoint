const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function getMapImageUrl(): string {
    if (!BASE_URL) throw new Error("VITE_API_BASE_URL ist nicht gesetzt");
    return `${BASE_URL}/api/v1/map/image`;
}