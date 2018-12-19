import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms' 
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router:Router  , private _userService:UserService , private _active:ActivatedRoute ) { }
  successMessage:any ; errorMessage :any;
  agePattern = "[0-10]";
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  registerForm:FormGroup = new FormGroup({


    email: new  FormControl (null , [Validators.email  , Validators.required]),
    name: new FormControl (null ,  Validators.required),
    age : new FormControl (null ,  Validators.required),
    password : new FormControl (null , Validators.required)

  })

    register(){

      // console.log(this.registerForm.value);

      if (this.registerForm.valid) {
      this._userService.register(this.registerForm.value).subscribe(
        data => {
      
          
          this.successMessage = "registerd sucessfully" ;
          this.registerForm.reset();
          this._router.navigate(['/login'])
      
          
        },
        error =>{
              

          setTimeout(() => {
            this.successMessage = ''
          }, 2000);

        this.successMessage = "error in registering user" ;


        }
      )
    }

  }




  ngOnInit() {

    if (this._userService.isLoggednIn) {
   return this._router.navigate(['/user'])    
   }

  }

isValid(controlName){
return this.registerForm.get(controlName).invalid  && this.registerForm.get(controlName).touched
   
}

movetologin() {
  this._router.navigate(['/login'], { relativeTo: this._active });
}



}
