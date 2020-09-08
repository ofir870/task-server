import { Component, OnInit } from '@angular/core';
import { MeasurementTypesService } from '../../services/measurement.types.service'
import { BrowserModule, Title } from '@angular/platform-browser';
import { Router, ROUTER_CONFIGURATION, RouterLink } from '@angular/router'

@Component({
  selector: 'app-measurement-types',
  templateUrl: './measurement-types.component.html',
  styleUrls: ['./measurement-types.component.css']
})


export class MeasurementTypesComponent implements OnInit {

 

  measurementTypesArray: any;

  pageTitle: String
  constructor(private measurementType: MeasurementTypesService, private title: Title, private router: Router) { }

  ngOnInit(): void {

    this.title.setTitle("Measurement Types");
    this.pageTitle = this.title.getTitle()
    this.measurementType.getMeasurementTypesList().subscribe(measurementType => {
      console.log(measurementType[0].updatedOn.slice(0, 10))

      this.measurementTypesArray = measurementType
      console.log(this.measurementTypesArray)
    })

  }
  onTaskClick(item, indexOfRow, event) {

    if (event.srcElement.className === "fa fa-trash fa-2x") {
      alert("Are you sure you want to delete this row")
      console.log(indexOfRow)

    }
    else {
      this.measurementType.getMeasurementTypesById(item.id).subscribe(measurementType => {
        console.log(measurementType)
      })
    }


  }

}
