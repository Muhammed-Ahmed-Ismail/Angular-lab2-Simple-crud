import {Component, OnInit} from '@angular/core';
import {Student} from "../../_models/department";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: Student[] = [new Student(1, 'os', 'alex'),
    new Student(2, 'os', 'smart')];


  editing: boolean = false;

  editedDepartmentID:string='';

  constructor() {
  }

  add(id: string, name: string, loc: string) {
    let newDepartment = new Student(Number(id), name, loc)
    this.departments.push(newDepartment);
    console.log(this.departments)
  }

  delete(id: number) {
    let indexToDelete = this.departments.findIndex((department) => {
      return department.id === Number(id)
    })
    this.departments.splice(indexToDelete, 1)
  }

  update(idOfSelectedDepartment: number, id: any, name: any, loc: any) {
    this.editing = true;
    let indexToUpdate = this.departments.findIndex((department) => {
      return department.id === Number(idOfSelectedDepartment)
    })
    id.value = this.departments[indexToUpdate].id;
    name.value = this.departments[indexToUpdate].name;
    loc.value = this.departments[indexToUpdate].loc;
    this.editedDepartmentID=idOfSelectedDepartment.toString();
    console.log(this.editedDepartmentID)
  }

  save( id: any, name: any, loc: any) {
    let indexToUpdate = this.departments.findIndex((department) => {
      return department.id === Number(this.editedDepartmentID)
    })
    this.departments[indexToUpdate].id = id.value
    this.departments[indexToUpdate].name = name.value
    this.departments[indexToUpdate].loc = loc.value
    this.editing = false;
    console.log(this.departments)
  }

  ngOnInit(): void {
  }

}
