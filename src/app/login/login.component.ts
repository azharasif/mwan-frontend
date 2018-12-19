import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

message:any; Message:String="you are register sucessfull login to countnue";
loginForm:FormGroup  = new FormGroup({
   email: new FormControl(  null ,[Validators.email , Validators.required]),
   password :  new FormControl ( null  , Validators.required )
})
  constructor(private _router : Router , private  _user : UserService ) {
  }
  ngOnInit() {
    if (this._user.isLoggednIn) {
    return this._router.navigate(['/user'])
   }
  }
isValid(controlName){
return this.loginForm.get(controlName).invalid  && this.loginForm.get(controlName).touched  
}
movetoregister(){
  this._router.navigate(['/register'])
}
login() {
 
  

  if (this.loginForm.valid) {
    this._user.login(this.loginForm.value)
      .subscribe(
        data => {
          //console.log(data);
          sessionStorage.setItem('token', data.toString());
          this._router.navigate(['/user']);
        },
        err => { 



this.message = err.error.message;

setTimeout(() => {
  this.message=''
}, 2000);
//console.log(err);

        }
      );
  }
}


}

