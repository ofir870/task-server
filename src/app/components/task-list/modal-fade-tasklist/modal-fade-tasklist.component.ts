import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-fade-tasklist',
  templateUrl: './modal-fade-tasklist.component.html',
  styleUrls: ['./modal-fade-tasklist.component.css']
})
export class ModalFadeTasklistComponent implements OnInit {

  taskListArr:Array<any>
  
  taskListMap = new Map();
  constructor() { }

  onSubmit(e){
    
    e.preventDefault()

    this.taskListArr = []
  for(let i =0;i<5;i++){ 
     
        this.taskListArr.push(e.target[i].value)
        let name = e.target[i].name
        // this.taskListObject.e.target[i].name
     
  } 
  console.log(this.taskListArr)
  
  for (var item of this.taskListArr){
    this.taskListMap.set (item.name ,item);
    console.log(this.taskListMap)
   }
  
  // console.log(this.taskListObject)
  }
  ngOnInit(): void {
  }

}
