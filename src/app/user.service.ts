import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReturnStatement } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient , private _router: Router) { }


  register(body:any){
    return  this._http.post('http://localhost:3000/register',  body , {
    observe:'body',
    headers:new HttpHeaders().append('Content-Type' ,'application/json')
    })
  }

  login(body:any){
return  this._http.post('http://localhost:3000/login'  ,  body , {

observe:'body',
headers:new HttpHeaders().append('Content-Type' ,'application/json')
})
  }
  getUserName(){
    return this._http.get('http://localhost:3000/user', {
      observe: 'body',
      params: new HttpParams().append('token', sessionStorage.getItem('token'))
    });
  }
  getToken() {
    return sessionStorage.getItem("token")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }


  getUserProfile(){
return this._http.get('http://localhost:3000/profile'  , {

  observe: 'body',
})
  }

  uploadNews(body:any){
    return  this._http.post('http://localhost:3000/profile' , body , {
      observe:'body' ,
      params: new HttpParams().append('token', sessionStorage.getItem('token'))
    })
  }

  getusernews(){
return this._http.get('http://localhost:3000/mynews' ,  {
  observe:'body',
  params: new HttpParams().append('token', sessionStorage.getItem('token'))
})

  }

  home(){
    return this._http.get('http://localhost:3000/home' , {
observe:'body',
headers:new HttpHeaders().append('Content-Type' ,'application/json')
    })
  }

deletenews(elementid:any){

  return this._http.delete('http://localhost:3000/delete/'+ elementid ,{

    params: new HttpParams().append('token', sessionStorage.getItem('token'))
  } ) 
}

geteditnews(id:any){

return this._http.get('http://localhost:3000/edit/'+ id , {
  params: new HttpParams().append('token', sessionStorage.getItem('token'))

} )

}

updatenews(id:any, body:any){
  return this._http.put('http://localhost:3000/update/:id',{id,body},{
observe:'body',
    params: new HttpParams().append('token', sessionStorage.getItem('token'))
  })
}

}
