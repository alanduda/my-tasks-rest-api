import { Injectable } from '@nestjs/common';
import { tasks, lastId } from './database/tasks' ;

let id = lastId;

@Injectable()
export class AppService {
  getTasks(): any {
    return tasks;
  }

  createTasks(title: string, description: string): any {
    id++;
    const newTask = { id, title, description };
    tasks.push(newTask);
    return tasks;
  }

  updateTask(id: number, title: string, description: string): any {
    const newTask = { id, title, description };
    const index  = tasks.findIndex(task => task.id === id);

    if (index !== -1) {
      tasks[index] = newTask;
    } else {
      return { message: 'task not found' };
    }

    return tasks;
  }

  deleteTask(id: number): any {
    const index  = tasks.findIndex(task => task.id === id);

    if (index !== -1) {
      tasks.splice(index, 1);
    } else {
      return { message: 'task not found' };
    }

    return tasks;
  }

  update(id: number, properties: Array<any>): any {
    const index  = tasks.findIndex(task => task.id === id);
    const keys = Object.keys(properties);

    if (index !== -1) {
      keys.forEach(key => {
        tasks[index][key] = properties[key];
      });
    } else {
      return { message: 'task not found' };
    }

    return tasks;
  }
}
