import { useEffect, useMemo, useState } from "react";
import styles from "./EventsPage.module.css";

type CockpitEvent = {
    _id: string;
    title: string;
    start?: string;        // ISO oder Datum-String
    end?: string;          // optional
    description?: string;  // für die rechte Spalte (wenn keine Uhrzeit)
    image?: string;
};

function parseDate(value?: string): Date | null {
    if (!value) return null;

    // ISO? -> Date kann das
    const d1 = new Date(value);
    if (!Number.isNaN(d1.getTime())) return d1;

    // Falls es "25.10.2025" o.ä. ist:
    const m = value.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
    if (m) {
        const [, dd, mm, yyyy] = m;
        const d2 = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
        if (!Number.isNaN(d2.getTime())) return d2;
    }

    return null;
}

function fmtDate(d: Date | null): string {
    if (!d) return "---";
    return d.toLocaleDateString("de-AT", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function fmtDateShort(d: Date | null): string {
    if (!d) return "---";
    return d.toLocaleDateString("de-AT", { day: "2-digit", month: "2-digit" });
}

function fmtTime(d: Date | null): string {
    if (!d) return "";
    return d.toLocaleTimeString("de-AT", { hour: "2-digit", minute: "2-digit" });
}

// Prüft ob zwei Daten am gleichen Tag sind
function isSameDay(d1: Date | null, d2: Date | null): boolean {
    if (!d1 || !d2) return true;
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
}

// Datum-Spalte: "DD.MM.YYYY" oder "DD.MM. - DD.MM.YYYY" für mehrtägige
function formatDateRange(ev: CockpitEvent): string {
    const start = parseDate(ev.start);
    const end = parseDate(ev.end);
    
    if (!start) return "---";
    
    // Mehrtägiger Termin?
    if (end && !isSameDay(start, end)) {
        return `${fmtDateShort(start)} – ${fmtDate(end)}`;
    }
    
    return fmtDate(start);
}

// Rechte Spalte: wenn Start-Zeit vorhanden -> "HH:MM Uhr", sonst Description (kurz)
function rightColumn(ev: CockpitEvent): string {
    const start = parseDate(ev.start);
    const t = fmtTime(start);
    if (t && t !== "00:00") return `${t} Uhr`;

    const desc = (ev.description ?? "").trim();
    if (!desc) return "";
    return desc.length > 18 ? desc.slice(0, 18) + "…" : desc;
}

// Berechnet den Beginn von gestern (Mitternacht)
function getYesterdayMidnight(): Date {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    now.setDate(now.getDate() - 1);
    return now;
}

export default function EventsPage() {
    const [events, setEvents] = useState<CockpitEvent[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        const controller = new AbortController();

        (async () => {
            try {
                setLoading(true);
                setError("");

                // limit kannst du ändern
                const res = await fetch(`/api/v1/events/20`, {
                    headers: { Accept: "application/json" },
                    signal: controller.signal,
                });

                if (!res.ok) {
                    const text = await res.text();
                    // wenn CMS down → Backend sollte idealerweise [] liefern,
                    // aber falls nicht: eine freundliche Meldung
                    throw new Error(
                        res.status >= 500
                            ? "Termine derzeit nicht verfügbar"
                            : `HTTP ${res.status}: ${text}`
                    );
                }

                const data = (await res.json()) as CockpitEvent[];
                setEvents(data);
            } catch (e) {
                if (e instanceof DOMException && e.name === "AbortError") return;
                setError(e instanceof Error ? e.message : "Load failed");
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    }, []);

    const sorted = useMemo(() => {
        const cutoff = getYesterdayMidnight().getTime();
        
        // Filtern: nur Termine die noch nicht vorbei sind
        // (End-Datum oder Start-Datum muss >= gestern Mitternacht sein)
        const filtered = events.filter((ev) => {
            const end = parseDate(ev.end);
            const start = parseDate(ev.start);
            const relevantDate = end ?? start;
            if (!relevantDate) return false;
            return relevantDate.getTime() >= cutoff;
        });
        
        // Sortieren: nächster Termin oben (aufsteigend)
        return filtered.sort((a, b) => {
            const da = parseDate(a.start)?.getTime() ?? 0;
            const db = parseDate(b.start)?.getTime() ?? 0;
            return da - db;
        });
    }, [events]);

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Termine</h1>

            <div className={styles.card}>
                {loading && <div className={styles.info}>Wird geladen…</div>}
                {error && <div className={`${styles.info} ${styles.error}`}>Fehler: {error}</div>}

                {!loading && !error && sorted.length === 0 && (
                    <div className={styles.info}>Keine Termine vorhanden</div>
                )}

                <div className={styles.list}>
                    {sorted.map((ev) => {
                        const timeStr = rightColumn(ev);
                        return (
                            <div key={ev._id} className={styles.row}>
                                <div className={styles.colTitle}>
                                    <span className={styles.titleDot}></span>
                                    {ev.title}
                                </div>
                                <div className={styles.colDate}>
                                    <span className={`material-icons ${styles.icon}`}>calendar_today</span>
                                    {formatDateRange(ev)}
                                </div>
                                {timeStr && (
                                    <div className={styles.colRight}>
                                        <span className={`material-icons ${styles.icon}`}>schedule</span>
                                        {timeStr}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}