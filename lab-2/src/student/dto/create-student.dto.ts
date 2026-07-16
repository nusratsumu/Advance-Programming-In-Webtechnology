import { IsInt, IsString, IsNumber, Min, MaxLength } from 'class-validator';

export class CreateStudentDto {

  @IsInt()
  id!: number;

  @IsString()
  @MaxLength(50)
  name!: string;

  @IsNumber()
  @Min(0)
  cgpa!: number;
}