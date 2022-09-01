import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';
import { Students } from '../students';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: any;

  constructor(private formBuilder: FormBuilder, 
    private _studentService: StudentsService,
    private router: Router) { }

  ngOnInit(){
    this.addForm =this.formBuilder.group({
      Roll: [],
      Name: ['', Validators.required]
    });
  }

  

  onClickSubmit() {
    // console.log(result);
    this._studentService.createStudent(this.addForm.value)
    .subscribe(data => {
      this.router.navigate(['view']);
    })
  }

  
}
