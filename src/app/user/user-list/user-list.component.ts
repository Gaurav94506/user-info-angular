import { Component,Input, OnInit, ViewChild,OnDestroy, Output, EventEmitter } from '@angular/core';
import { User } from '../../model/user.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import {Subject} from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


//  @Input() userlist:User;
//   @Input() index: number;
//   @Output() userDetails=new EventEmitter<User>();
//   searchedUser:''


  userlist:User;
   userDetails=new Subject<User>();
  searchedUserByName:'';
  searchedUserBydesi:'';
  searchedUserByExpertise:'';
  searchedUserByPincode:'';
  searchedUserByState:''

  //extra: string[] = ["ab","cd","ef","gh"];


   id:number;
  constructor(private router: Router,private route: ActivatedRoute,
              private userService:UserService) 
              { }

 ngOnInit() {
   //debugger;
  this.refreshUserList();
 // console.log(this.extra);
  //this.extra.splice(0,1);
 // console.log(this.extra);
 }

 deleteUser(user){
  //console.log(user.id)
  this.userService.deleteUser(user.id)
  .subscribe(
      success=>
      {
          // var index = this.userlist.indexOf(user,0)
          // if (index > -1)
          // {
          //     this.userlist.splice(index, 1);
              this.refreshUserList();
        //  }
      }
  )

      
    }

 editUser(id){
   this.id=id;
   this.router.navigate(['edit',this.id], {relativeTo: this.route});
 }

  // ngOnDestroy() {
  //  // this.subscription.unsubscribe();
  // }

  onNewUser(){
    this.router.navigate(['new']);
  }
  displayDetails(user){
   // this.userDetails.emit(user);
    this.userService.userSelected.next(user);
   // this.router.navigate(['userInfo'], {relativeTo: this.route});
   // console.log('user dtails is'+user)
  }

  searchUser(){
  //  console.log('serach given user')
  }
  refreshUserList(){
    this.userService.getproducts().subscribe(
      (responsedata=>this.userlist=responsedata),
      (error)=>console.log("server is not responding"+error)
      );
  };
  // deleteUser(value){
  //  // var target = event.target
  //  // var idAttr = target.attributes.id;
  //  // this.id=this.suser.id;
  //  //@ViewChild(id) id:
  //   console.log(value)
  //  // this.router.navigate(['delete',this.id], {relativeTo: this.route});
  //   //console.log('deleted button value is '+this.id);
  // }
  // editUser(value){
  //  // this.id=this.suser.id;
  //   this.router.navigate(['edit',this.id], {relativeTo: this.route});
  // }





}
