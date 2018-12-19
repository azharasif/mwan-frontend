import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroupDirective, FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-editcomponent',
  templateUrl: './editcomponent.component.html',
  styleUrls: ['./editcomponent.component.css']
})
export class EditcomponentComponent implements OnInit {


  EditForm: FormGroup = new FormGroup({
    title: new FormControl,
    news: new FormControl
  })
  news: any; title: any
  new_data: any; message:any
  constructor(private _user: UserService, private route: Router, private _active: ActivatedRoute, private formBuilder: FormBuilder ) {

  }
  ngOnInit() {
    console.log(this._active.snapshot.params.id);
    this.EditForm = this.formBuilder.group({
      'title': [null, Validators.required],
      'news': [null, Validators.required],
    })

    this._user.geteditnews(this._active.snapshot.params.id).subscribe(

      Data => {
        this.new_data = Data;
        // console.log(this.new_data);
      })
  }

  isValid(controlName) {
    return this.EditForm.get(controlName).invalid && this.EditForm.get(controlName).touched
  }

  updatenews(){
    
    this._user.updatenews(this.EditForm.value , this._active.snapshot.params.id).subscribe(
      Data => {
      this.message = "news Updated sucessfully"
          
        this.route.navigate(['/mynews'])
        this.message = "news Updated sucessfully"
      },

      err=>{

        this.message = err;
      

      }


    )

  }

}

