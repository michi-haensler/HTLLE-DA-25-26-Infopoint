export type TeacherInfoDTO = {
    fullHeader: string;
    lastName: string;
    firstName: string;
    shortCode: string;
    currentSubject: any | null;
};

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function searchTeachers(q: string, date: string): Promise<TeacherInfoDTO[]> {
    const url = new URL(`${BASE_URL}/api/v1/teacher-finder/search`);
    url.searchParams.set("q", q);
    url.searchParams.set("date", date);

    const res = await fetch(url.toString());
    if (!res.ok) {
        throw new Error("Teacher search failed");
    }

    return res.json();
}