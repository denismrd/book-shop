import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { PopupService } from '../popup/popup.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css', '../shared-css/book-component.css']
})
export class AllBooksComponent implements OnInit {
  loading = true
  books:any = []
  constructor(private userSr:UserService, private bookSr:BookService, private popupSr:PopupService, private router:Router) { }

  ngOnInit(): void {
    this.books = this.bookSr.books
    if(this.books.length) {
      this.loading = false;
      return;
    }
    this.bookSr.getAllBooks().subscribe((data)=>{
      this.books = data
      this.loading = false
    }, (err)=>{
      this.loading = false
    })
  }

}
