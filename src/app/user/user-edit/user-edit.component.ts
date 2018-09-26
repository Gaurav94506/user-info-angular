import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User
  id: number;
  mode: string = ''
  userForm: FormGroup;
  genders = ['male', 'female'];
  // fieldName='name';
  // fieldDesignation='designation';
  // fieldExpertise='expertise';
  // fieldState='state';

  constructor(private activateRou: ActivatedRoute, private userService: UserService, private router: Router) { }


  ngOnInit() {

    this.id = this.activateRou.snapshot.params['id'];
    this.mode = this.activateRou.snapshot.params['mode'];
    //console.log(this.id+'mode is'+this.mode)

     if (this.mode === 'edit') {
      this.getUserByID(this.id);
    }



    this.userForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'designation': new FormControl(null, Validators.required),
      'expertise': new FormControl(null, Validators.required),
      'adr': new FormGroup({
        'state': new FormControl(null,Validators.required),
        'pincode': new FormControl(null, [Validators.required, Validators.minLength(6),Validators.pattern('^[1-9][0-9]{5}')])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });



  }
  // deleteUser(id) {
  //   this.userService.deleteUser(id).subscribe(
  //     (
  //       responseData =>{
  //         console.log(responseData);
  //         this.router.navigate(['users']);
  //       } 
  //       )
  //   );
    

  // }
  //getuser(id)
  getUserByID(id) {
    // console.log('control comes her getUserByID'+id)
    const userData = this.userService.getuser(id).subscribe(
      (responseData => {
        this.user = responseData;
        this.userForm.patchValue({
          'name': this.user.name,
          'designation': this.user.designation,
          'expertise': this.user.expertise,
          'adr': {
            'pincode': this.user.adr.pincode,
            'state': this.user.adr.state
          }

        })

      })
    );


  }

  saveUser() {
    console.log('user is goinf to save' + this.userForm.value);

    if (this.mode === 'edit') {


      this.userService.updateUser(this.id, this.userForm.value).subscribe(
        ((responseData) => {
          this.router.navigate(['users']);
          this.userForm.reset();
          console.log('response data is ' + responseData);
         }
      ));
      ((error)=>{console.log(error)})
    } else {

      this.userService.saveUser(this.userForm.value).subscribe((
        (responseData) => {
          this.router.navigate(['users']);
          this.userForm.reset();
        }
      ));
    }

  }

  onAddHobby() {
    const control = new FormGroup({
        'hobbyname':new FormControl('test'),
        'style':new FormControl('any style')
    });
    //FormControl(null);
    (<FormArray>this.userForm.get('hobbies')).push(control);

  }

}
