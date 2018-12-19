import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UserService}   from '../app/user.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsernewsComponent } from './usernews/usernews/usernews.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { EditcomponentComponent } from './editcomponent/editcomponent.component';
import { UpdatedComponent } from './updated/updated.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    UserprofileComponent,
    UsernewsComponent,
    HomecomponentComponent,
    EditcomponentComponent,
    UpdatedComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
