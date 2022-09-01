import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Students} from './students';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }
   getStudents() {
    return this.http.get<Students[]>('http://localhost/Student/index.php');
   }

   deleteStudent(roll:number) {
    return this.http.delete<Students[]>('http://localhost/Student/delete.php?roll='+ roll);
   }

   createStudent(student : Students) {
    console.log(student);
    return this.http.post('http://localhost/Student/add.php', student);
   }

}
 