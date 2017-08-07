import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  @Input() item: {title: string, content: string};
  
  constructor() { }

  ngOnInit() { }

  

}
