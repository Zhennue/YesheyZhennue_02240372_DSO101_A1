import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Task, TaskPatch } from "./task.types";

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [];
  private nextId = 1;

  findAll(): Task[] {
    return [...this.tasks];
  }

  create(title: string): Task {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      throw new BadRequestException("Title is required");
    }

    const task: Task = {
      id: this.nextId,
      title: trimmedTitle,
      completed: false,
    };

    this.nextId += 1;
    this.tasks.push(task);

    return task;
  }

  update(id: number, patch: TaskPatch): Task {
    const task = this.findOne(id);

    if (patch.title !== undefined) {
      const trimmedTitle = patch.title.trim();

      if (!trimmedTitle) {
        throw new BadRequestException("Title cannot be empty");
      }

      task.title = trimmedTitle;
    }

    if (patch.completed !== undefined) {
      task.completed = patch.completed;
    }

    return task;
  }

  remove(id: number): void {
    const index = this.tasks.findIndex((task) => task.id === id);

    if (index === -1) {
      throw new NotFoundException("Task not found");
    }

    this.tasks.splice(index, 1);
  }

  private findOne(id: number): Task {
    const task = this.tasks.find((entry) => entry.id === id);

    if (!task) {
      throw new NotFoundException("Task not found");
    }

    return task;
  }
}
