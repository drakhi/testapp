import { Component, OnInit } from '@angular/core';
  import { FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-reactiveformsample',
  templateUrl: './reactiveformsample.component.html',
  styleUrls: ['./reactiveformsample.component.css']
})
export class ReactiveformsampleComponent implements OnInit {
  registerForm:FormGroup;
  submitted = false;
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
   this.registerForm=this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.maxLength(9),Validators.minLength(4),Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]]
   }) 
  }

  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

}
