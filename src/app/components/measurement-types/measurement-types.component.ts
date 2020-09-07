import { Component, OnInit } from '@angular/core';
import { MeasurementTypesService } from '../../services/measurement-types.service'
import { BrowserModule, Title } from '@angular/platform-browser';
import { Router, ROUTER_CONFIGURATION, RouterLink } from '@angular/router'
import { Observable } from 'rxjs';  


@Component({
  selector: 'app-measurement-types',
  templateUrl: './measurement-types.component.html',
  styleUrls: ['./measurement-types.component.css']
})
export class MeasurementTypesComponent implements OnInit {

 measurementTypesArray : any;
  pageTitle  : String
  
  constructor(private measurementType: MeasurementTypesService ,private title: Title, private router  : Router) { }

  ngOnInit(): void {

    this.title.setTitle("Measurement Types");
    this.pageTitle = this.title.getTitle()
    this.measurementType.getMeasurementTypesList().subscribe(measurementType =>console.log(measurementType))

    // this.measurementTypesArray = this.measurementType.get();
  }
onTaskClick(item ,indexOfRow ,event){

        if (event.srcElement.className === "fa fa-trash fa-2x") {
          alert("Are you sure you want to delete this row")
          console.log(indexOfRow)
          
        }
        else{
          // will add a non dynamic item to tasklist  
          // this.taskListArray.push({ actionName: 'ofir', description: 'Details about the action ', goal: "Goal ", result: false ,trigger:"trigger",timeLimit:new Date(),assignment:"assignment",score:1,group:"action group",tags:["a","b","c"],status:["live","runnimg","finished"],roles:"roles"})

          console.log("row click")
        }
    

  }
 
}
