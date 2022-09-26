import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';
import { Students } from '../students';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  addForm: any;
  constructor(private formBuilder: FormBuilder, 
    private _studentService: StudentsService,
    private router: Router,
    private routes:ActivatedRoute) { }

  ngOnInit(){

    const routeParams = this.routes.snapshot.params['id'];

    console.log(routeParams);

    this._studentService.getByRoll(routeParams).subscribe((data: any) => {
      console.log(data);
      this.addForm.patchValue(data);
    })

    this.addForm =this.formBuilder.group({
      Roll: [''],
      Name: ['', Validators.required]
    });
  }

  update() {
    // console.log(this.addForm.value);
    this._studentService.updateStudent(this.addForm.value)
    .subscribe( () => {
      this.router.navigate(['view']);
    })
  }

}
