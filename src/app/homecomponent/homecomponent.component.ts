import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  allNews : any
  constructor(private _user: UserService, private _router: Router) { }

  ngOnInit() {
    this._user.home().subscribe(

      data=>{
        this.allNews = data ; 
       // console.log(this.allNews);
      },
      err=>{
//console.log(err);
      }

    )
  }



}

