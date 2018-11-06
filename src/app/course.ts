export class Course {
    title: string;
    section: string;
    description: string;
    bookInfo: string;
    meetingTime: string;
    gradingScale: GradeScale[];
    calendar: Calendar[];
}
export class Calendar {
    date: string;
    description: string;
    notesLink: string;
}
export class GradeScale {
    percentageRange: string;
    letterGrade: string;
}