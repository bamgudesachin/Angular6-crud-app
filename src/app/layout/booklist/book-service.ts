import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from  'rxjs';

import {ConstantService} from "../../shared/services/constant.service";
import { HttpClientService } from '../../shared/services/http-client.service';
import { Book } from "./book";
import { Router } from "@angular/router";

import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class BookService {
  private webServiceURL: string;

  public token: any;
  private headers: Headers;  
  private params = {};
  image: any;
  constructor(private http: HttpClient, 
              private constantService: ConstantService,
              private httpClientService: HttpClientService,
              private router: Router
            ) 
  {
    this.webServiceURL = this.constantService.WEBSERVICE_URL;
  }

  getAllBooks() : Observable<any> {    
    return this.httpClientService.get(this.webServiceURL);
  }
  
  saveBook(data) :Observable<any> {
    return data.ID > 0 ? this.httpClientService.put(this.webServiceURL + '/' + data.ID,data): this.httpClientService.post(this.webServiceURL,data);
  }

  deleteBook(ID) : Observable<any> {    
    return this.httpClientService.delete(this.webServiceURL + '/' + ID);
  }
}
