import { Component,Input, OnInit, ViewChild,OnDestroy, Output, EventEmitter } from '@angular/core';
import { User } from '../../model/user.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';





@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() userlist:User;
  @Input() index: number;
  @Output() userDetails=new EventEmitter<User>();


   id:number;
  constructor(private router: Router,private route: ActivatedRoute,
              private userService:UserService) 
              {console.log(this.userlist) }

 ngOnInit() {
   
 }
 deleteUser(id){
   this.id=id;

   this.router.navigate(['delete',this.id], {relativeTo: this.route});
   //console.log('deleted button value is '+this.id);
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
    this.userDetails.emit(user);
    
    console.log('user dtails is'+user)
  }



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
