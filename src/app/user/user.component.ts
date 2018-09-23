import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //users:User;
  user:User;
  //name:string;
 // id:number;
 // designationa:string;
  private subscription: Subscription;
  
  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
      // this.userService.getproducts().subscribe((

      //   responsedata=>
      //   this.users=responsedata
        
      // ));
   
     // const userobject=Observable.this.userService.getproducts()
      // this.route.params.subscribe(
      //   (params:Params)=>
      //   {
          
      //   / this.user.address=params['adr'];
      //      this.user.name=params['name'];
      //      this.user.designation=params['designation'];
      //      this.user.expertise=params['expertise'];
      //     console.log("control comes here"+params['name'])
      //   }
      // ) commented here

  }
  // ngOnDestroy() {
  //  // this.subscription.unsubscribe();
  // }

}
