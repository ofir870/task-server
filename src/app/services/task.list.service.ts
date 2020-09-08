import { Injectable } from '@angular/core';
import { TaskList } from '../models/task-list'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList: Array<TaskList> = ([  

    {id:1, actionName: 'ofir', description: 'Details about the action ', goal: "Goal ", result: false ,trigger:"trigger",timeLimit:new Date(),assignment:"assignment",score:1,group:"action group",tags:["a","b","c"],status:["live","runnimg","finished"],roles:"roles"},  
      

  
  ]) 
  constructor() { }
  get() {  
    return this.taskList;  
  }  
}
