import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AuthGuard } from './auth.guard';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsernewsComponent } from './usernews/usernews/usernews.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { EditcomponentComponent } from './editcomponent/editcomponent.component';
import { UpdatedComponent } from './updated/updated.component';



const routes: Routes = [
{path : ''  , redirectTo:'login' , pathMatch:'full'},
{path :'login' , component:LoginComponent},
{path : 'register' , component:RegisterComponent},
{path : 'profile' , component:UserprofileComponent ,  canActivate: [AuthGuard] }, 
{path : 'edit/:id' , component:EditcomponentComponent,  canActivate: [AuthGuard] }, 
{path : 'delete/:id' , component:UserprofileComponent ,  canActivate: [AuthGuard] }, 
{path : 'user' , component:UserhomeComponent , canActivate: [AuthGuard] }, 
{path : 'mynews' , component:UsernewsComponent ,  canActivate: [AuthGuard] },
{path : 'home' , component:HomecomponentComponent},
{path : 'update/:id' , component:EditcomponentComponent , canActivate: [AuthGuard] },

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
