import { Component, OnInit } from '@angular/core';
import { MeasurementTypesService } from '../../services/measurement.types.service'
import { BrowserModule, Title } from '@angular/platform-browser';
import { Router, ROUTER_CONFIGURATION, RouterLink } from '@angular/router'
@Component({
  selector: 'app-measurement-types',
  templateUrl: './measurement-types.component.html',
  styleUrls: ['./measurement-types.component.css']
})


export class MeasurementTypesComponent implements OnInit {
  
  
  
  measurementTypesArray: any;
  
  pageTitle: String
  constructor(private measurementType: MeasurementTypesService, private title: Title, private router: Router) { }
  
  ngOnInit(): void {
    
    this.title.setTitle("Measurement Types");
    this.pageTitle = this.title.getTitle()
    this.measurementType.getMeasurementTypesList().subscribe(measurementType => {
    

      this.measurementTypesArray = measurementType
      console.log(this.measurementTypesArray)
    })
    
  }
  someFun(e){
    console.log(e)
  }
  
  getRowData(e){
    console.log(e.target.innerHTML)
  }
  onTaskClick(item, indexOfRow, event) {
    
    if (event.srcElement.className === "fa fa-trash fa-2x") {
      alert("Are you sure you want to delete this row")
      console.log(indexOfRow)

      
    }
    else {
      
      this.measurementType.getMeasurementTypesById(item.id).subscribe(measurementType => {
        console.log(measurementType)
      })
    }
    
    
  }
  
}
// declare var $:JQueryStatic;

// const $tableID = $('#table');
// const $BTN = $('#export-btn');
// const $EXPORT = $('#export');

// const newTr = `
// <tr class="hide">
//  <td class="pt-3-half" contenteditable="true">Example</td>
//  <td class="pt-3-half" contenteditable="true">Example</td>
//  <td class="pt-3-half" contenteditable="true">Example</td>
//  <td class="pt-3-half" contenteditable="true">Example</td>
//  <td class="pt-3-half" contenteditable="true">Example</td>
//  <td class="pt-3-half">
//    <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a></span>
//    <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a></span>
//  </td>
//  <td>
//    <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0 waves-effect waves-light">Remove</button></span>
//  </td>
// </tr>`;

// $('.table-add').on('click', 'i', () => {

//   const $clone = $tableID.find('tbody tr').last().clone(true).removeClass('hide table-line');

//   if ($tableID.find('tbody tr').length === 0) {

//     $('tbody').append(newTr);
//   }

//   $tableID.find('table').append($clone);
// });

// $tableID.on('click', '.table-remove', function () {

//   $(this).parents('tr').detach();
// });

// $tableID.on('click', '.table-up', function () {

//   const $row = $(this).parents('tr');

//   if ($row.index() === 0) {
//     return;
//   }

//   $row.prev().before($row.get(0));
// });

// $tableID.on('click', '.table-down', function () {

//   const $row = $(this).parents('tr');
//   $row.next().after($row.get(0));
// });

// // A few jQuery helpers for exporting only
// jQuery.fn.pop = [].pop;
// jQuery.fn.shift = [].shift;

// $BTN.on('click', () => {

//   const $rows = $tableID.find('tr:not(:hidden)');
//   const headers = [];
//   const data = [];

//   // Get the headers (add special header logic here)
//   $($rows.shift()).find('th:not(:empty)').each(function () {

//     headers.push($(this).text().toLowerCase());
//   });

//   // Turn all existing rows into a loopable array
//   $rows.each(function () {
//     const $td = $(this).find('td');
//     const h = {};

//     // Use the headers from earlier to name our hash keys
//     headers.forEach((header, i) => {

//       h[header] = $td.eq(i).text();
//     });

//     data.push(h);
//   });

//   // Output the result
//   $EXPORT.text(JSON.stringify(data));
// });
