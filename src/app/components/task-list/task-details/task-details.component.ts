import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  name: String;

  
  constructor(private activatedRoute: ActivatedRoute) {
  
    this.name = this.activatedRoute.snapshot.paramMap.get('name')
    }
  ngOnInit(): void {
  }

}
