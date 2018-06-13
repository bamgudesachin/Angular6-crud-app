import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user.service";
import {Router} from "@angular/router";
import {ConstantService} from "../shared/services/constant.service";

@Injectable()
export class AuthenticationService {
  users = [];
  private headers: Headers;

  private jsonUrl= '../../assets/admin.json';

  constructor(private router: Router, private http:HttpClient, private constantService: ConstantService) {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  
  getJson():any {
    return this.http.get(this.jsonUrl);
  }  

  logout():any {               
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
  }
}


