import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): ITask[] {
    return this.tasksService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string): ITask | undefined {
    return this.tasksService.findOne(id);
  }
}
