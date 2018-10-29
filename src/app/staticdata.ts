import { Course } from './course';

export const COURSES: Course[] = [
    {
        title: 'Web Enterprises',
        section: 'p422',
        description: 'Course covering client/server web programming',
        bookInfo: 'Node.js, MongoDB and Angular Web Development by Dayley, Dayley, $ Dayley',
        meetingTime: 'M/W 19:30-21:20 in LF105',
        gradingScale: { percentageRange: '90-100', letterGrade: 'A'},
        calendar: { date: '10-28-2018', description: '', notesLink: ''},
        universityInfo: ''
    },
    {
        title: 'Statistics',
        section: 'K300',
        description: 'Introduction to Statistics',
        bookInfo: 'Elementary Statistics by Namor',
        meetingTime: 'T/Th 16:00-17:30 in PS-115',
        gradingScale: { percentageRange: '80-90', letterGrade: 'B'},
        calendar: { date: '10-28-2018', description: '', notesLink: ''},
        universityInfo: ''
    }

]