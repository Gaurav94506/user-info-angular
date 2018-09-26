import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { HeadreComponent } from './header/header.component';
import { SingleuserComponent } from './user/user-list/singleuser/singleuser.component';


const appRoutes: Routes = [
  {path : 'home', component: AppComponent },
  { path: 'users/:mode/:id', component: UserEditComponent  },
  { path: 'new', component: UserEditComponent },
  { path: 'users', component: UserComponent, 
          children: [
              //  { path: 'userInfo', component: SingleuserComponent },
                     // { path: 'new', component: UserEditComponent },
                    //  { path: 'edit/:id', component: UserEditComponent  },
                      
                    ] },
  
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouterModule { }








