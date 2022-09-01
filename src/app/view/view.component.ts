import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Students } from '../students';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  students: any;
  constructor(public _studentsService: StudentsService) { }

  ngOnInit() {
    this._studentsService.getStudents()
    .subscribe((data: Students[]) => {
      // console.log(JSON.stringify(data));
      
      this.students = data;
      console.log(this.students);
    });
  }
  delete(students: Students): void {
    console.log(students.Roll);
   this._studentsService.deleteStudent(students.Roll)
   .subscribe (data=>{
    this.students = this.students.filter((u:any) => u!==students);
   }) ; 
  }
}
