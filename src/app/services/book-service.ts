import {Injectable} from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {Observable} from  'rxjs';

import {ConstantService} from "../shared/services/constant.service";
import { HttpClientService } from '../shared/services/http-client.service';
import { Router } from "@angular/router";

@Injectable()
export class BookService {
  private webServiceURL: string;

  public token: any;
  private headers: Headers;  
  private params = {};
  image: any;
  constructor(private http: Http, 
              private constantService: ConstantService,
              private httpClientService: HttpClientService,
              private router: Router
            ) {}

  getAllBooks() : Observable<any> { 
    this.webServiceURL = this.constantService.WEBSERVICE_URL;    
    return this.httpClientService.get(this.webServiceURL);              
  }
  
}
