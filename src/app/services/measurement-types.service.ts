
import { MeasurementType } from '../models/measurement-type'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeasurementTypesService {

  measurementType: Array<MeasurementType> = ([  

    { name: 'ofir', code: 'Details about the action ', active: true,type:"A"},  
    { name: 'ofir', code: 'Details about the action ', active: true,type:"A"},  
    { name: 'ofir', code: 'Details about the action ', active: true,type:"A"},  
    { name: 'ofir', code: 'Details about the action ', active: true,type:"A"},  
    { name: 'ofir', code: 'Details about the action ', active: true,type:"A"},  
    

  
  ]) 
  
  constructor() { }
  get() {  
    return this.measurementType;  
  }  
}
