import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { TasksService } from "./tasks.service";

type CreateTaskBody = {
  title: string;
};

type UpdateTaskBody = {
  title?: string;
  completed?: boolean;
};

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body() body: CreateTaskBody) {
    return this.tasksService.create(body.title);
  }

  @Patch(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() body: UpdateTaskBody) {
    return this.tasksService.update(id, body);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    this.tasksService.remove(id);
    return { success: true };
  }
}
