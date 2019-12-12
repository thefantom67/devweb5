import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() filter : EventEmitter<String> = new EventEmitter<String>();
  filterName : String = "";

  constructor() { }

  ngOnInit() {
  }

  sendFilterByName(){
    this.filter.emit(this.filterName);
  }

  //Je sais pas faire un filtre, mais je sais faire des Carbo :D

}
