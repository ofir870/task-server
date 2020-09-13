import { Component, OnInit } from '@angular/core';
import { MeasurementTypesService } from '../../../services/measurement.types.service'
import { MeasurementType } from '../../../models/measurement-type'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-modal-fade-measurement-types',
  templateUrl: './modal-fade-measurement-types.component.html',
  styleUrls: ['./modal-fade-measurement-types.component.css']
})


export class ModalFadeMeasurementTypesComponent implements OnInit {
  
  constructor(private mTS: MeasurementTypesService  ) { }

  mtm: MeasurementType = 
  {id:20, name: 'ofir', createdBy:123,createdOn:new Date(),active:true,code:"12",types:"qwe",updatedBy:123,updatedOn:new Date()} 




  ngOnInit(): void {
 

  }
  
      onSubmitMeasurement(e){
        e.preventDefault()
  
        
        this.mTS.createMeasurementType(this.mtm).subscribe(measurementType =>{
            console.log(measurementType)
        })
        


      }

}
