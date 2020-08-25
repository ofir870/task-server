import { Component, OnInit } from '@angular/core';
import * as SampleJson from "../../assets/sidebarData.json";
@Component({
  selector: 'app-reading-file-json',
  templateUrl: './reading-file-json.component.html',
  styleUrls: ['./reading-file-json.component.css']
})
export class ReadingFileJsonComponent implements OnInit {

  constructor() {

    console.log('Reading local json files');
 console.log(SampleJson);
   }

  ngOnInit(): void {
  }

}
