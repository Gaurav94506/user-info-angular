import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headre',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeadreComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit() {
  }
  onNewUser(){
    this.router.navigate(['new']);
  }

 
}
