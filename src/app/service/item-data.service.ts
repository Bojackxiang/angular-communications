import { Injectable } from '@angular/core';

@Injectable()
export class ItemDataService {

  constructor() { }

  items = [ 
  		{title: "read book", content: "from 100 - 120"},
  		{title: "cook", 	   content: "chicken soup"}
  ];

  add( thing:{title: string, content: string} ){
  	this.items.push({title: thing.title, content: thing.content});
  }

}
