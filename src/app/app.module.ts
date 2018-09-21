import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeadreComponent } from './header/header.component';
import { AppRouterModule } from './router-module.module';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserListComponent } from './user/user-list/user-list.component';
import { SingleuserComponent } from './user/user-list/singleuser/singleuser.component';
import { UserService } from './services/user.service';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeadreComponent,
    UserEditComponent,
    UserListComponent,
    SingleuserComponent
  ],
  imports: [
    BrowserModule,AppRouterModule,BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
