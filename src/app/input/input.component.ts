import { Component, OnInit } from '@angular/core';
import { ItemDataService } from '../service/item-data.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {

  constructor( private data: ItemDataService ) {}

  thing = {title: "", content:""}

  ngOnInit() {
  }

  title = "";
  content = "";

  buttonClick(){
  	this.thing.title = this.title;
  	this.thing.content = this.content;
  	this.data.add({title: this.title, content: this.content});
  }



}
