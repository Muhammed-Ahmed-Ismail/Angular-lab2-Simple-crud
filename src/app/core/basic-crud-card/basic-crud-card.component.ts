import { Component, OnInit } from '@angular/core';
import {Student} from "../../_models/department";

@Component({
  selector: 'app-basic-crud-card',
  templateUrl: './basic-crud-card.component.html',
  styleUrls: ['./basic-crud-card.component.css']
})
export class BasicCrudCardComponent implements OnInit {

  departments:Student[]=[];
  constructor() { }


  ngOnInit(): void {
  }

}
