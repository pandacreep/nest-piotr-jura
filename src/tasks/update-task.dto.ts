import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}

// export class UpdateTaskDto {
//   @IsNotEmpty()
//   @IsString()
//   @IsOptional()
//   title?: string;

//   @IsNotEmpty()
//   @IsString()
//   @IsOptional()
//   description?: string;

//   @IsNotEmpty()
//   @IsEnum(TaskStatus)
//   @IsOptional()
//   status?: TaskStatus;
// }
