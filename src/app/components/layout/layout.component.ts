import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { getUrlScheme } from '@angular/compiler';
import { Router }  from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    
  constructor(public router: Router) {
    
  }

  
  
  ngOnInit(): void {
  }
  
} 
