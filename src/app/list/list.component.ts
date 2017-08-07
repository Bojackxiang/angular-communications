import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }

  @Output() itemList = new EventEmitter<{title: string, content: string}>();
  
  @Input() dataGroup: {title: string, content: string}[];

  onClick(target){
    this.itemList.emit({title: target.title, content: target.content});
  }


}
