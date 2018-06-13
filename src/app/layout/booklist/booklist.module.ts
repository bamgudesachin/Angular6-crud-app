import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { AuthGuard } from '../../guards/auth.guard';
import { BooklistRoutingModule } from './booklist-routing.module';
import { BooklistComponent } from './booklist.component';
import { ConstantService } from "../../shared/services/constant.service";
import { BookService } from "./book-service";
import { HttpClientService } from '../../shared/services/http-client.service';
import { ModalComponent } from '../../shared/modal/modal.component';
import { PagerService } from './../../services/pager.service';

import { OrderModule } from 'ngx-order-pipe';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    imports: [
    			CommonModule, 
    			BooklistRoutingModule, 
    			FormsModule,
    			ReactiveFormsModule, 
    			HttpClientModule,
    			OrderModule,
    			NgxSpinnerModule
    		],
    providers: [
    			ConstantService,
    			AuthGuard,
    			BookService,
    			HttpClientService,
    			PagerService
    		],
    declarations: [
    			BooklistComponent,
    			ModalComponent
    		]
})
export class BooklistModule {}
