import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

  courses = [
    {
      id: 101,
      name: 'Web Technology',
      code: 'CS301',
    },
    {
      id: 102,
      name: 'Database',
      code: 'CS302',
    },
  ];

  getAllCourses() {
    return this.courses;
  }

  getCourse(id: number) {
    return this.courses.find(course => course.id === id);
  }

  addCourse(course: any) {
    this.courses.push({
      id: this.courses.length + 101,
      ...course,
    });

    return {
      message: 'Course Added Successfully',
      course,
    };
  }
}