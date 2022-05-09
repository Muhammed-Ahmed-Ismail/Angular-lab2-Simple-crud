import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";
import { BasicCrudCardComponent } from './basic-crud-card/basic-crud-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BasicCrudCardComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [HeaderComponent, BasicCrudCardComponent]
})
export class CoreModule { }
