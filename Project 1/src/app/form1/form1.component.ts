import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, } from '@angular/forms';
import { any } from 'cypress/types/bluebird';
import { data } from 'cypress/types/jquery';
import { ary } from 'cypress/types/lodash';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  // ti = 'rdt';inpltn
  addForm1Form!: FormGroup;
  // users!: FormArray;
  // value!: FormArray;
  resetform(){
    this.addForm1Form.reset();
  }

  constructor(private fb: FormBuilder) { }

 trackFormName(event: any): void {
    this.addForm1Form.valueChanges.subscribe(data=> {

      console.log(data);
    
    })
    
  } 


  ngOnInit(): void {
    // this.addForm1Form = new FormGroup({
    //   'form1Name' : new FormControl(),
    //   'formDescription' : new FormControl(),
    // })

    

    // this.users = new FormArray([
    //    new FormControl('Angular'),
    //    new FormControl ('Application')
    // ]);

    // console.log(this.users);
    // console.log(this.users.value);


    this.addForm1Form = this.fb.group({
      'form1Name': new FormControl('',[
       Validators.required,
       Validators.minLength(10),
       Validators.maxLength(20)
      ]
      ),
      'formDescription': new FormControl('',Validators.compose([
        Validators.required,
       Validators.minLength(10),
       Validators.maxLength(20) 
      ])),
      'formType': new FormControl('',Validators.required),

      
      /*'users' :  new FormArray([
        new FormControl('Angular'),
        new FormControl ('Application')
     ]),*/
    //  This is a fromArray with a FormGroup
    'users' : new FormArray([
      this.fb.group({
       'name' : new FormControl('Samprit'),
       'age'  : new FormControl('27'),
       'dept' : new FormControl('Kanungo')
      })
    ])

    })
  //  statusChange valid ya invalid
  this.addForm1Form.statusChanges.subscribe(data=> {
    console.log(data);
  })
    
  }

  //   newFormObj = {
  //    'form1Name': 'Employment Contact',
  //    'formDescription': 'The Employer desires to employe the Employee and the Employee hasagreed to accept and enter such employment upon the terms and conditions set out in this Agreement. ',
  //   'formType': 'Type of Employment',
  //  }

get users():  FormArray {
  return this.addForm1Form.get('users') as FormArray
}

addUser(){
  let userArr = this.addForm1Form.get('users') as  FormArray;
  // let arrayLength = userArr.length;
  let newUser = this.fb.group({
    'name': '',
    'age' : '',
    'dept': '',
  });

  userArr.push(newUser);
  // console.log(newUser);

}

removeUser(i:any){
  let userArr = this.addForm1Form.get('users') as  FormArray;
  userArr.removeAt(i);
}

assignDept(i:any){
  console.log(i);
  let userArr = this.addForm1Form.get('users') as  FormArray;
  let values =  userArr.value;
  if(values[i].age > 55){
    values[i].dept = 'ADMIN'
  }
  else {
values[i].dept = 'CSC'

  }
  this.users.setValue(userArr.value);
}

  addForm1() {

  console.log(this.addForm1Form.valid);
  console.log(this.addForm1Form.invalid);
  console.log(this.addForm1Form.pending);
  console.log(this.addForm1Form.pristine);
  console.log(this.addForm1Form.dirty);
  console.log(this.addForm1Form.touched);
  console.log(this.addForm1Form.untouched);



    // console.log(this.addForm1Form.value);
    // console.log(this.addForm1Form.get('formType')?.value);
    // console.log(this.addForm1Form.valid);
    // this.addForm1Form.valueChanges.subscribe(data => {
    //  console.log(data);

    // });

  
  }


}
