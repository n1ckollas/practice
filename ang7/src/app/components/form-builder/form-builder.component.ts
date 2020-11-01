import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  profileForm = this.fb.group({
    firstName:['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street:[''],
      city:[''],
      state:[''],
      zip:[''],
    }),
    aliases: this.fb.array([
      this.fb.control(''),
    ])
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(){
    this.aliases.push(this.fb.control(''));
  }

  onSubmit(){
    console.log(this.profileForm);
  }

}
