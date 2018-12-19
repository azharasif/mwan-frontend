
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
message:any ; 
  constructor(private _user: UserService, private route: Router, private _route: ActivatedRoute) { }

  NewsForm: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    news: new FormControl(null , Validators.required)
  })

  uploadNews() {
    this._user.uploadNews(this.NewsForm.value).subscribe(
      Data => {
      
        this.message = 'upload sucessfully';
        setTimeout(() => this.message  =  "",  2000);
                  this.NewsForm.reset();
      },
      err =>{
        setTimeout(()=> this.message = "" ,  2000);
       this.message =  err.error.message;
      }
    )
  }
  isValid(controlName) {
    return this.NewsForm.get(controlName).invalid && this.NewsForm.get(controlName).touched
  }
  ngOnInit() {
  }

}
