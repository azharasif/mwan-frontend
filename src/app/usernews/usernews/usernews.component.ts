import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-usernews',
  templateUrl: './usernews.component.html',
  styleUrls: ['./usernews.component.css']
})
export class UsernewsComponent implements OnInit {
message:any
  Mydata : any;
  constructor(private _user: UserService, private _router: Router) {

   }

  ngOnInit() {

    this._user.getusernews().subscribe(

data =>{
  this.Mydata = data ;
  console.log(this.Mydata);


}
)}

editnews(elementid:any){

  this._router.navigate(['/edit' , elementid])

  
}

deletenews(elementid:any){

this._user.deletenews(elementid).subscribe(
  data=>{
    this._user.getusernews().subscribe(
   
data =>{


    this.message = "news deleted sucessfully "

  setTimeout(()=> this.message ="" ,  2000);

  this.Mydata = data ;
  console.log(this.Mydata);

},

error =>{

  this.message = "error in deleting news" 
  
setTimeout(() => {
  this.message= ''
}, 2000);



}



    )
  // this._router.navigateByUrl('/mynews')

})

}




// deletenews(element_id:any){

//   this._user.deletenews(element_id).subscribe(
// data =>{
//   console.log(data);
//   this._router.navigate(['/delete' , element_id])
// }

//   )

// }


}
