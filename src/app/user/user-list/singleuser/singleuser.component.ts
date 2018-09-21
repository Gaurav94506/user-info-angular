import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../model/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {

   @Input() suser:User;
   @Input() index: number;
   formArrayExam:FormGroup
  constructor(private router: Router,
    private route: ActivatedRoute,private userService:UserService) {console.log(this.suser) }
  
  genders = ['male', 'female'];
  ngOnInit() {
    this.formArrayExam = new FormGroup({
      // 'userData': new FormGroup({
      //   'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      //   'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      // }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });


  }

  onAddHobby() {
    const control = new FormControl(null);
    (<FormArray>this.formArrayExam.get('hobbies')).push(control);
    // some changes
  }
  // deleteUser(id){
  //   this.id=id;


    
  //   this.router.navigate(['delete',this.id], {relativeTo: this.route});
    
  // }
  // editUser(id){
  //   this.id=id;
  //   this.router.navigate(['edit',this.id], {relativeTo: this.route});
  // }


}
