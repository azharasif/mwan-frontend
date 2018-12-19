import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  username:any;
  constructor(private _user: UserService, private _router: Router) {

    this._user.getUserName()
    .subscribe(
      res =>{
          this.username = res ;
          console.log(this.username)
      },
      err => { 
        console.log(err);
      }
     )
  }

  ngOnInit() {
  }

  logout() {
    sessionStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
  getUserProfile(){

    this._router.navigate(['/profile'])
  }


}
