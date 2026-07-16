import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { CourseService } from './course.service';

@Controller('course')
export class CourseController {

  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAllCourses() {
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  getCourse(@Param('id') id: string) {
    return this.courseService.getCourse(Number(id));
  }

  @Post()
  addCourse(@Body() course: any) {
    return this.courseService.addCourse(course);
  }
}