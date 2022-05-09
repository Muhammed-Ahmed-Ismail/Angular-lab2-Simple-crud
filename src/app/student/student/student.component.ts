import { Component, OnInit } from '@angular/core';
import {Student} from "../../_models/student";


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

 students:Student[]=[new Student(1,"Ahmed",19,"os"),
                      new Student(2,"Abdo",12,'sa') ]
  editing:boolean=false

  editedStudentID:number=0;
  constructor() { }

  add(id: string, name: string, age: string,deptName:string) {
    let newDepartment = new Student(Number(id), name, Number(age),deptName)
    this.students.push(newDepartment);
    console.log(this.students)
  }

  delete(id: number) {
    let indexToDelete = this.students.findIndex((department) => {
      return department.id === Number(id)
    })
    this.students.splice(indexToDelete, 1)
  }

  update(idOfSelectedStudent: number, id: any, name: any, age: any,deptName:any) {
    this.editing = true;
    let indexToUpdate = this.students.findIndex((department) => {
      return department.id === Number(idOfSelectedStudent)
    })
    id.value = this.students[indexToUpdate].id;
    name.value = this.students[indexToUpdate].name;
    age.value = this.students[indexToUpdate].age;
    deptName.value = this.students[indexToUpdate].deptName;
    this.editedStudentID=idOfSelectedStudent;
    console.log(this.editedStudentID)
  }

  save( id: any, name: any, age: any,deptName:any) {
    let indexToUpdate = this.students.findIndex((department) => {
      return department.id === this.editedStudentID
    })
    this.students[indexToUpdate].id = id.value
    this.students[indexToUpdate].name = name.value
    this.students[indexToUpdate].age = age.value
    this.students[indexToUpdate].deptName = deptName.value
    this.editing = false;
    console.log(this.students)
  }


  ngOnInit(): void {
  }

}
