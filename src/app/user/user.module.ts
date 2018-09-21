import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { SingleuserComponent } from './user-list/singleuser/singleuser.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserEditComponent, UserListComponent, SingleuserComponent]
})
export class UserModule { }
