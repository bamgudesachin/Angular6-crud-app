import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService,User } from "../services/index";
import { NgForm } from "@angular/forms";
import {ConstantService} from "../shared/services/index";

@Component({
  
  template: '',
  providers:[AuthenticationService,ConstantService]
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,private authenticationService:AuthenticationService) { }
  	
  ngOnInit() {    
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
     
  }

}
