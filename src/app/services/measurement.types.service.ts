
import { MeasurementType } from '../models/measurement-type'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MeasurementSerial } from '../services/serializer/measurement.type.serial'

@Injectable({
  providedIn: 'root'
})

export class MeasurementTypesService {

  private url='http://localhost:8090/';
  private endpoint = 'mtypes/';
  private serializer = new MeasurementSerial();

  constructor(private http: HttpClient) { }
  
  getMeasurementTypesList(): Observable<MeasurementType[]> {
    
    return this.http.get<MeasurementType[]>(`${this.url}${this.endpoint}list`)
  }
  getMeasurementTypesById(id: number): Observable<object> {
    return this.http.get(`${this.url}${this.endpoint}${id}`)
  }
  
  createMeasurementType(measurementType: MeasurementType): Observable<MeasurementType> {
    return this.http.post<MeasurementType>(`${this.url}${this.endpoint}`,measurementType) 

  }
  updateMeasurementType(measurementType: MeasurementType): Observable<MeasurementType> {
    return this.http
    .put<MeasurementType>(`${this.url}/${this.endpoint}/${measurementType.id}`, measurementType);
  }
  
  delete(id: number) {
    return this.http
    .delete(`${this.url}/${this.endpoint}/${id}`);
  }
  
  
}
    // httpOptionsGet: any = {
    //   headers: new HttpHeaders()
    //     .append('Content-Type', 'application/json')
    //     .append('Access-Control-Allow-Headers', 'Content-Type')
    //     .append('Access-Control-Allow-Origin', '*')
    //     .append('Access-Control-Allow-Methods', 'GET')
    
    // };
    // httpOptionsPost: any = {
    //   headers: new HttpHeaders()
    //     .append('Content-Type', 'application/json')
    //     .append('Access-Control-Allow-Headers', 'Content-Type')
    //     .append('Access-Control-Allow-Origin', '*')
    //     .append('Access-Control-Allow-Methods', 'Post')
    
    // };