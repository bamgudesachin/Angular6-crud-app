import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {Router} from "@angular/router";
import { AppRoutingModule } from '../../app-routing.module'; 

@Injectable()
export class ConstantService {


  constructor(private router: Router) {
  }

 // public WEBSERVICE_URL: string = "http://localhost:9090/springjpabootproj";
  public WEBSERVICE_URL: string = "http://fakerestapi.azurewebsites.net/api/Books";
 
 public RECORD_PER_PAGE: number = 5;

  public OAUTH2_CLIENT_USERNAME: string = "springbootproj-trusted-client";
  public OAUTH2_CLIENT_PASSWORD: string = "secret";

  public MESSAGE_ACCESSTOKEN_EXPIRED: string = "Looks like your access token has been expired. Please login.";

  public MESSAGE_INTERNAL_SERVER_ERROR: string = "Some internal server error has occured. Please try again. If problem persists then please contact Administrator.";
  public MESSAGE_NO_RECORDFOUND_ERROR: string = "No records found.";

  public handleError = function (error: Response) {
   
    let errMsg = error.json().error || 'Server error';
    console.error("Response error: " + errMsg);
  
    if (error.status === 0) {
      alert(this.MESSAGE_ACCESSTOKEN_EXPIRED);
      this.token = null;
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    } else if (error.status === 500) {
      alert(this.MESSAGE_INTERNAL_SERVER_ERROR);
    } else if(error.status === 401){
      this.token = null;
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    }
    return Observable.throw(error.json().error || 'Server error');
  }.bind(this);

  public extractData = function (res: Response) {     
    if (res.status === 204) {
      alert(this.MESSAGE_NO_RECORDFOUND_ERROR);
    } else {      

      let body: any;
      
      if (res.text()) {
        body = res.json();
       
      }
      return body || {};
    }
  }.bind(this)





}
