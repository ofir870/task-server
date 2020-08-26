import { Injectable } from '@angular/core';
import { TaskList } from '../model/task-list'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskList: Array<TaskList> = ([  
    { name: 'ofir', companyDomain: 'bextra.io', industrySector: "cars", city: 'beerot' ,country:"israel"},  
    { name: 'ofir1', companyDomain: 'bextra.io1', industrySector: "cars1", city: 'beerot1' ,country:"israel1"},  
    { name: 'ofir2', companyDomain: 'bextra.io2', industrySector: "cars2", city: 'beerot2' ,country:"israel2"},  
    { name: 'ofir3', companyDomain: 'bextra.io3', industrySector: "cars3", city: 'beero3' ,country:"israel3"},  

  
  ]) 
  constructor() { }
  get() {  
    return this.taskList;  
  }  
}
