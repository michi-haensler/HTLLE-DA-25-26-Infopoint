export type TeacherInfoDTO = {
    fullHeader: string;
    lastName: string;
    firstName: string;
    shortCode: string;
    currentSubject: any | null;
};

export async function searchTeachers(q: string, date: string): Promise<TeacherInfoDTO[]> {
    const params = new URLSearchParams({ q, date });

    const res = await fetch(`/api/v1/teacher-finder/search?${params}`);
    if (!res.ok) {
        throw new Error("Teacher search failed");
    }

    return res.json();
}