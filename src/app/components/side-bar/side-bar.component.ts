import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAngry} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  addedLink = "<a class='atag'>added</a>"
  icon = faAngry
  public sideBarProps = ["<a class='atag'>first<a/> ", "<a class='atag'>secend</a>"];
  public push(item: any) {
    // code
  } 
  
  public name:String;
  constructor(private router: Router) {

   }

  ngOnInit(): void {
    this.sideBarProps.push(this.addedLink)
    
  }


}

