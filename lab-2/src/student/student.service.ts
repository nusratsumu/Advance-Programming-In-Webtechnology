import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

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

  addStudent(student: CreateStudentDto) {
    this.students.push(student);

    return {
      message: 'Student Added Successfully',
      student,
    };
  }

  updateStudent(id: number, student: UpdateStudentDto) {
    const index = this.students.findIndex(s => s.id === id);

    if (index === -1) {
      return {
        message: 'Student Not Found',
      };
    }

    this.students[index] = {
      ...this.students[index],
      ...student,
    };

    return {
      message: 'Student Updated Successfully',
      student: this.students[index],
    };
  }

  patchStudent(id: number, student: UpdateStudentDto) {
    const existingStudent = this.students.find(s => s.id === id);

    if (!existingStudent) {
      return {
        message: 'Student Not Found',
      };
    }

    Object.assign(existingStudent, student);

    return {
      message: 'Student Updated Successfully',
      student: existingStudent,
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