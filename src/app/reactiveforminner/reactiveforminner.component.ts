import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-reactiveforminner',
  templateUrl: './reactiveforminner.component.html',
  styleUrls: ['./reactiveforminner.component.css']
})
export class ReactiveforminnerComponent implements OnInit {
  myForm :FormGroup;
  constructor(
    private fb:FormBuilder
  ) { }


  apires1=[
    {"actualday":"d1","actualdate":"4/26/2019","attenType":"1","attenTypename":"present","attenTypeshortname":"p"},
    {"actualday":"d2","actualdate":"5/26/2019","attenType":"1","attenTypename":"present","attenTypeshortname":"p"},
    {"actualday":"d3","actualdate":"6/26/2019","attenType":"2","attenTypename":"Absent","attenTypeshortname":"A"}
    ]
    apires2=[
    {'jobecode':'95250','taskcode':1,"d1":"null","d2":"null","d3":"null"},
    {'jobecode':'95251','taskcode':2,"d1":"null","d2":"null","d3":"null"},
    {'jobecode':'95252','taskcode':3,"d1":"null","d2":"null","d3":"null"},
    
    ]

  ngOnInit() {

    this.myForm=this.fb.group({
  email:['',Validators.required,Validators.email],
  password:['',Validators.required,Validators.maxLength(10),Validators.minLength(5)],
  age:['',Validators.required, Validators.minLength(2),Validators.min(5),Validators.max(60)]


    });
  }

get f(){
  return this.myForm.controls;
}

get email() {
  return this.myForm.get('email');
}

get password() {
  return this.myForm.get('password');
}

get age() {
  return this.myForm.get('age');
}

}
