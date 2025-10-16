import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './task.model';
import { CreateTaskDto } from './create-task.dto';
import { FindOneParams } from './find-one.params';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): ITask[] {
    return this.tasksService.findAll();
  }

  @Get('/:id')
  findOne(@Param() params: FindOneParams): ITask | undefined {
    const task = this.tasksService.findOne(params.id);

    if (task) {
      return task;
    }

    throw new NotFoundException();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }
}
