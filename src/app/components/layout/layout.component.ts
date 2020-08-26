import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { getUrlScheme } from '@angular/compiler';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    isSideBar = false
    loginLocation0 = "http://localhost:4200/login" 
    loginLocation1 = "http://localhost:4200/" 
  constructor() {
    
  }
  ifAddSideBAr(){
    if(!window.location.toString().includes(this.loginLocation0)||!window.location.toString().includes(this.loginLocation1)){
      console.log("inside")
      return true
    }
     console.log()
  
  }
  ngOnInit(): void {
  }
  
} 
