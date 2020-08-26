import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.list.service'
import { BrowserModule, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-test-page',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskListArray : any;
  pageTitle  : String

 constructor(private taskService: TaskService ,private title: Title ) { }
  ngOnInit(): void {
    this.title.setTitle("Tasks List");
    this.pageTitle = this.title.getTitle()
    this.taskListArray = this.taskService.get();

  }
 
}
