import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {

  students = [
    {
      id: 1,
      name: 'Nusrat',
      cgpa: 3.95,
    },
    {
      id: 2,
      name: 'Rahim',
      cgpa: 3.70,
    },
  ];

  getAllStudents() {
    return this.students;
  }

  getStudent(id: number) {
    return this.students.find(student => student.id === id);
  }

  addStudent(student: any) {
    this.students.push(student);

    return {
      message: 'Student Added Successfully',
      student,
    };
  }

  updateStudent(id: number, student: any) {
    const index = this.students.findIndex(s => s.id === id);

    if (index === -1) {
      return {
        message: 'Student Not Found',
      };
    }

    this.students[index] = student;

    return {
      message: 'Student Updated Successfully',
      student,
    };
  }

  patchStudent(id: number, data: any) {
    const student = this.students.find(s => s.id === id);

    if (!student) {
      return {
        message: 'Student Not Found',
      };
    }

    Object.assign(student, data);

    return {
      message: 'Student Updated Successfully',
      student,
    };
  }

  deleteStudent(id: number) {
    const index = this.students.findIndex(s => s.id === id);

    if (index === -1) {
      return {
        message: 'Student Not Found',
      };
    }

    this.students.splice(index, 1);

    return {
      message: 'Student Deleted Successfully',
    };
  }
}