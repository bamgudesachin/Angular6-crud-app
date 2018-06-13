import { Component,Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HtmlTagDefinition } from '@angular/compiler';

import { Book } from "../../layout/booklist/book";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    closeResult: string;
    @Input() type: string;
    @Input() bookOrg: any;
    @Output() triggerAction: EventEmitter<any> = new EventEmitter<any>();
    private modalRef: NgbModalRef;
    book:any;

    constructor(private modalService: NgbModal) {}

    ngOnInit() {
        if(!this.bookOrg){
            this.book = {
                ID: 0,
                Title: '',
                Description: '',  
                PublishDate: '',
                Excerpt: '',
                PageCount: ''
            }
        }else{
            this.book = Object.create(this.bookOrg);
            this.book.PublishDate = new Date(this.book.PublishDate).toISOString().split('T')[0];
        }
    }

    doAction(val){
        this.triggerAction.emit(val);
        this.modalRef.close();
    }

    open(content) {
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
