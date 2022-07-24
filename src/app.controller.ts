import { Body, Controller, Delete, Get, Options, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tasks')
  getTaks(): any {
    return this.appService.getTasks();
  }

  @Put('create')
  createTasks(@Body() body: any): any {
    const response = this.appService.createTasks(body.title, body.description);
    return response
  }

  @Post('update')
  updateTask(@Body() body: any): any {
    const response = this.appService.updateTask(body.id, body.title, body.description);
    return response
  }

  @Delete('delete')
  deleteTasks(@Body() body: any): any {
    const response = this.appService.deleteTask(body.id);
    return response
  }

  @Patch('update')
  update(@Body() body: any): any {
    const response = this.appService.update(body.id, body.properties);
    return response
  }
}
