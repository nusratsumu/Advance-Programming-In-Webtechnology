import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  getStudent(@Param('id') id: string) {
    return this.studentService.getStudent(Number(id));
  }

  @Post()
  addStudent(@Body() student: CreateStudentDto) {
    return this.studentService.addStudent(student);
  }

  @Put(':id')
  updateStudent(
    @Param('id') id: string,
    @Body() student: UpdateStudentDto,
  ) {
    return this.studentService.updateStudent(Number(id), student);
  }

  @Patch(':id')
  patchStudent(
    @Param('id') id: string,
    @Body() student: UpdateStudentDto,
  ) {
    return this.studentService.patchStudent(Number(id), student);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }
}