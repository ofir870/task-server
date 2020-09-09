import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  title: String
  myUrl: String
  
  constructor() { }

  getTitle() {
    return this.title
  }
  setTitle(title) {
    return this.title = title
  }
  getUrl() {
    return this.myUrl
  }
  setUrl(myUrl) {
    return this.myUrl = myUrl
  }
}