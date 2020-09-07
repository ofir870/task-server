import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.list.service'
import { BrowserModule, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  taskListArray : any;
  pageTitle  : String


  constructor(private taskService: TaskService ,private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("main");
    this.pageTitle = this.title.getTitle()
    // this.taskListArray = this.taskService.get();
  }

}
