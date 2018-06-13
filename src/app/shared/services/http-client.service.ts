import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class HttpClientService {

	constructor(private router: Router,
                private http: HttpClient) {
    }

	public post(url: string, requestData: any){
		if(requestData){
			return this.http.post(url, JSON.stringify(requestData), httpOptions);
		}else{
			return this.http.post(url,httpOptions);
		}
	}

	public get(url: string) {
	    return this.http.get(url);
	}

	public put(url: string, requestData: any){	
		return this.http.put(url, JSON.stringify(requestData), httpOptions);		
	}

	public delete(url: string){
		return this.http.delete(url);
	}

	public extractData (res: Response){
		if(res.status === 204){
			//alert('No records found');
		}else{
			let body: any;
			if(res.text()){
				body = res.json();
			}
			return body || {};
		}
	}

	public handleError (error: any) {
	    const errMsg = (error.message) ? error.message :
	      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	    console.error(errMsg);
	    return Observable.throw(errMsg);
	}

}
