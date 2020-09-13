import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.list.service'
import { BrowserModule, Title } from '@angular/platform-browser';
import { Router, ROUTER_CONFIGURATION, RouterLink } from '@angular/router'

@Component({
  selector: 'app-test-page',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  taskListArray : any;
  pageTitle  : String
  actionName : String
 constructor(private taskService: TaskService ,private title: Title, private router  : Router  ) { }
  ngOnInit(): void {
    this.title.setTitle("Tasks List");
    this.pageTitle = this.title.getTitle()
    this.taskListArray = this.taskService.get();
    
  }
  deleteRow(){
  }
  onTaskClick(item ,indexOfRow ,event){

        if (event.srcElement.className === "fa fa-trash fa-2x") {
          alert("Are you sure you want to delete this row")
          console.log(indexOfRow)
          
        }
        else{
          // will add a non dynamic item to tasklist  
          // this.taskListArray.push({ actionName: 'ofir', description: 'Details about the action ', goal: "Goal ", result: false ,trigger:"trigger",timeLimit:new Date(),assignment:"assignment",score:1,group:"action group",tags:["a","b","c"],status:["live","runnimg","finished"],roles:"roles"})

          this.actionName = item.actionName
          this.router.navigateByUrl(`tasklist/taskdetails/${this.actionName}`)
         
        }
    

  }
 
}
