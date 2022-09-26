import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Students } from '../students';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  students: any;
  _id:any;
  constructor(public _studentsService: StudentsService,
    private router: Router) { }

  ngOnInit() {
    this._studentsService.getStudents()
    .subscribe((data: Students[]) => {
      // console.log(JSON.stringify(data));
      
      this.students = data;
      console.log("Priyanshu");
    });
  }
  delete(students: Students): void {
    console.log(students.Roll);
   this._studentsService.deleteStudent(students.Roll)
   .subscribe (data=>{
    this.students = this.students.filter((u:any) => u!==students);
   }) ; 
  }
  edit(students: Students) {
    this._id = students.Roll;
    this.router.navigate(['edit/'+ this._id]);
  }

  addDetails() {
    this.router.navigate(['add']);
  }
}
