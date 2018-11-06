import { Course } from './course';



export const COURSES: Course[] = [
    {
        title: 'Web Enterprises',
        section: 'p422',
        description: 'Course covering client/server web programming',
        bookInfo: 'Node.js, MongoDB and Angular Web Development by Dayley, Dayley, $ Dayley',
        meetingTime: 'M/W 19:30-21:20 in LF105',
        gradingScale: [{percentageRange: '90-100', letterGrade: 'A'}, 
            {percentageRange: '80-90', letterGrade: 'B'},
            {percentageRange: '70-80', letterGrade: 'C'}],
        calendar: [{date: '10-22-2018', description: 'Angular lecture', notesLink: 'note link goes here'},
            {date: '10-24-2018', description: 'Component lecture', notesLink: 'note link goes here'},
            {date: '10-29-2018', description: 'Module lecture', notesLink: 'note link goes here'}],
    },
    {
        title: 'Statistics',
        section: 'K300',
        description: 'Introduction to Statistics',
        bookInfo: 'Elementary Statistics by Namor',
        meetingTime: 'T/Th 16:00-17:30 in PS-115',
        gradingScale: [{percentageRange: '90-100', letterGrade: 'A'}, 
            {percentageRange: '80-90', letterGrade: 'B'},
            {percentageRange: '70-80', letterGrade: 'C'}],
        calendar: [{date: '10-23-2018', description: 'Chapter 7 Section 2', notesLink: 'note link goes here'},
            {date: '10-25-2018', description: 'Chapter 7 section 3', notesLink: 'note link goes here'},
            {date: '10-30-2018', description: 'Chapter 6 & 7 review', notesLink: 'note link goes here'}],
    }

]