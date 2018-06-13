import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms";

import { AuthenticationService,User} from "./../services/index";
import {ConstantService} from "./../shared/services/constant.service";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers:[AuthenticationService,ConstantService] 
})
export class LoginComponent implements OnInit {
	model: any = {};
    loading = false;
    error = '';
    errorMsg = "";
    users;

    constructor(
        private router: Router,
        private http: HttpClient,
        private authenticationService: AuthenticationService,
        private constantService: ConstantService,
        private spinner: NgxSpinnerService) {  
            this.authenticationService.getJson()
                .subscribe(data => this.users = data.users);                  
    }  

	ngOnInit() {
	    if(localStorage.getItem('currentUser')){
	      this.router.navigate(['/booklist']);
	    }else{
            this.authenticationService.logout();                    
	    }	     
	}

	login(value){
        this.spinner.show();
        for(let i=0 ; i< this.users.length; i++)
        {
            if (this.users[i].username == value.username && this.users[i].password == value.password)
            {
                localStorage.setItem('currentUser', JSON.stringify({ 
                        username: this.users[i].username
                    }));

                this.spinner.hide();
                this.router.navigate(['/booklist']);
            }else{
                this.spinner.hide();
                this.errorMsg = "Invalid credentials";
               
            }
        }
	}
}
