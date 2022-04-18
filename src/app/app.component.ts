import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
public userForm: FormGroup;

public userStatus:string;

ngOnInit(){
 this.userForm = this.fb.group({
    name: new FormControl((''), [Validators.required]),
    jobTitle: new FormControl(''),
    email:new FormControl((''), [Validators.required]),
    status: new FormControl(),
    children:this.fb.array([this.fb.group({childName: [''] }) ])
  })
  this.userForm.controls.status.valueChanges.subscribe(value=>{
    console.log(value);
    this.userStatus = value
    console.log(this.userStatus);
  })
  
}
  constructor(private fb:FormBuilder){
  
  }
  
  get childrenForm(){
    return this.userForm.get("children") as FormArray
  }
  
  addChild(){
   let child = this.fb.group({
    childName: ['']
   });
   this.childrenForm.push(child);
  }

  removeChild(i:number) {
    this.userForm.controls.status.valueChanges
    this.childrenForm.removeAt(i);
  }

  onSubmit():void{
    console.log(this.userForm.value);
  }
}
