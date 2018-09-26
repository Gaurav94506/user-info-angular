import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from '../../../model/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit, OnDestroy {
  suser:User;
  subscription:Subscription;
  // @Input() suser:User;
 //  @Input() index: number;
  // formArrayExam:FormGroup
  constructor(private router: Router,
    private route: ActivatedRoute,private userService:UserService) {console.log(this.suser) }
  
 // genders = ['male', 'female'];
  ngOnInit() {
   this.subscription= this.userService.userSelected.subscribe(

      (selectedUser:User)=>{
        this.suser=selectedUser;
      }
      )
      
    // this.formArrayExam = new FormGroup({
    //   // 'userData': new FormGroup({
    //   //   'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
    //   //   'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
    //   // }),
    //   'gender': new FormControl('male'),
    //   'hobbies': new FormArray([])
    // });

 }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  // onAddHobby() {
  //   const control = new FormGroup({
  //       'name':new FormControl('test'),
  //       'style':new FormControl('any style')
  //   });
  //   //FormControl(null);
  //   (<FormArray>this.formArrayExam.get('hobbies')).push(control);
   
 // }



}
