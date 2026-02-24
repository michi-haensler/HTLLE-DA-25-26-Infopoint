export type ClassLesson = {
    subject: string;
    room: string;
    teachers: string;
    startTime: number;
    endTime: number;
    cancelled: boolean;
};

export type CurrentLesson = {
    subject: string;
    room: string;
    classes: string;
    startTime: number;
    endTime: number;
};

export type ClassInfoDTO = {
    className: string;
    fullName: string;
    shortCode: string;
    currentLesson: CurrentLesson | null;
};

export type ClassDayDTO = {
    className: string;
    fullName: string;
    shortCode: string;
    currentLesson: ClassLesson | null;
    lessons: ClassLesson[];
};

export async function getAllClasses(date: string): Promise<ClassInfoDTO[]> {
    const params = new URLSearchParams({ date });
    const res = await fetch(`/api/v1/class-finder/all?${params}`);
    if (!res.ok) {
        throw new Error("Class list failed");
    }
    return res.json();
}

export async function getClassDay(shortCode: string, date: string): Promise<ClassDayDTO> {
    const params = new URLSearchParams({ shortCode, date });
    const res = await fetch(`/api/v1/class-finder/day?${params}`);
    if (!res.ok) {
        throw new Error("Class day not found");
    }
    return res.json();
}
