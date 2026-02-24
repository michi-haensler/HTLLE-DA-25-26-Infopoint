export type TeacherInfoDTO = {
    fullHeader: string;
    lastName: string;
    firstName: string;
    shortCode: string;
    currentSubject: TeacherLessonDTO | null;
};

export async function searchTeachers(q: string, date: string): Promise<TeacherInfoDTO[]> {
    const params = new URLSearchParams({ q, date });

    const res = await fetch(`/api/v1/teacher-finder/search?${params}`);
    if (!res.ok) {
        throw new Error("Teacher search failed");
    }

    return res.json();
}

export type TeacherLessonDTO = {
    subject: string;
    room: string;
    classes: string;
    startTime: number;
    endTime: number;
    cancelled: boolean;
    irregular: boolean;
};

export type TeacherDayDTO = {
    fullHeader: string;
    lastName: string;
    firstName: string;
    shortCode: string;
    currentLesson: TeacherLessonDTO | null;
    lessons: TeacherLessonDTO[];
};

export async function getTeacherDay(shortCode: string, date: string): Promise<TeacherDayDTO> {
    const params = new URLSearchParams({ shortCode, date });
    const res = await fetch(`/api/v1/teacher-finder/day?${params}`);
    if (!res.ok) {
        throw new Error("Teacher day not found");
    }

    return res.json();
}
