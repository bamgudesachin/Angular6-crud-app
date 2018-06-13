import { Component, OnInit } from '@angular/core';
import {Subscription } from 'rxjs';
import {Observable} from  'rxjs';

import {ConstantService} from "../../shared/services/constant.service";
import { BookService } from "./book-service";
import { Book } from "./book";
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Params,Router,Routes } from '@angular/router';
import { Location }  from '@angular/common';
import { PagerService } from './../../services/pager.service';

import { OrderPipe } from 'ngx-order-pipe';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {

  booklist: any[];
  title;  
  PageCount;
  add_status;
  pager: any = {};
  pagedItems: any[];
  order: string = 'PublishDate';
  sortedCollection: any[];
  reverse: boolean = false;
  
  constructor(private http:HttpClient, 
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private pagerService: PagerService,
    private orderPipe: OrderPipe,
    private spinner: NgxSpinnerService
    ) {
      this.sortedCollection = orderPipe.transform(this.booklist, 'PublishDate');
  }
  
  ngOnInit() {
    this.spinner.show(); 
    setTimeout(() => {
        this.spinner.hide();
    }, 2000);
    this.getAllBooks();    
  }

  getAllBooks(){
    this.bookService.getAllBooks()
    .subscribe(res => {
      this.booklist = res;     
      this.setPage(1);
    })
  }

  setPage(page: number) {        
    this.pager = this.pagerService.getPager(this.booklist.length, page);        
    this.pagedItems = this.booklist.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  public saveBook(data: any):void {
    this.spinner.show();     
    this.bookService.saveBook(data)
    .subscribe(res => {
      this.getAllBooks();
      this.spinner.hide();
    });
  }

  public deleteBook(ID):void {
    this.spinner.show();
    this.bookService.deleteBook(ID)
    .subscribe(res => {
      this.getAllBooks();
      this.spinner.hide();
    });
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
  
}
