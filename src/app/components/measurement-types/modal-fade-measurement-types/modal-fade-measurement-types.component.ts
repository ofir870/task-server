import { Component, OnInit } from '@angular/core';
import { MeasurementTypesService } from '../../../services/measurement-types.service'
import { MeasurementType } from '../../../models/measurement-type'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-modal-fade-measurement-types',
  templateUrl: './modal-fade-measurement-types.component.html',
  styleUrls: ['./modal-fade-measurement-types.component.css']
})
export class ModalFadeMeasurementTypesComponent implements OnInit {
  
  constructor(private mT: MeasurementTypesService) { }

  

  ngOnInit(): void {
 

  }
      onSubmitMeasurement(e){
        e.preventDefault()
  
        
        this.mT.getMeasurementTypesList().subscribe(measurementType =>{
            console.log()
        })
        
      }

}
