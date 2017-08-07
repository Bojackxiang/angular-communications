import { Component } from '@angular/core';
import { ItemDataService } from './service/item-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private dataService: ItemDataService){ }

  data = this.dataService.items;

  single = {title: "", content: ""};

  singleItem(event){
  	this.single.title = event.title;
  	this.single.content = event.content;
  }


}
