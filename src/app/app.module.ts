import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { ItemDataService } from './service/item-data.service';
import { InputComponent } from './input/input.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    InputComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ItemDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
