
import { MeasurementType } from '../models/measurement-type'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const httpOptions : any    = {
  headers: new HttpHeaders()
  .append('Content-Type', 'application/json')
  .append('Access-Control-Allow-Headers', 'Content-Type')
  .append('Access-Control-Allow-Methods', 'GET')
  .append('Access-Control-Allow-Origin', 'http://localhost:8090')
  
};

@Injectable({
  providedIn: 'root'
})
export class MeasurementTypesService {


  measurementType: Array<MeasurementType> = [  

    // { code:"123",created_by:"asd",created_on:new Date(),id:"12",is_active:true,types:"types",name:"asd",updated_on:new Date(),updated_by:"שדג",field_type:"שדג"},  
    // { name: 'ofir', code: 'Details about the action ', active: true,type:"A"},  
    // { name: 'ofir', code: 'Details about the action ', active: true,type:"A"},  
    // { name: 'ofir', code: 'Details about the action ', active: true,type:"A"},  
    // { name: 'ofir', code: 'Details about the action ', active: true,type:"A"},  
  
  ]
   

  constructor( private http: HttpClient) { }


  getMeasurementTypesList():Observable<any> {  
    return this.http.get("http://localhost:8090/mtypes/list",httpOptions)
  }

  get(){
    return this.measurementType;
  }
}