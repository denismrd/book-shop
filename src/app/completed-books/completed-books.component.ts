import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-completed-books',
  templateUrl: './completed-books.component.html',
  styleUrls: ['./completed-books.component.css', '../shared-css/book-component.css']
})
export class CompletedBooksComponent implements OnInit {
  loading = 2
  user:any = {data:null}

  constructor(public userSr:UserService, public bookSr:BookService, public router:Router) { }

  ngOnInit(): void {
    this.userSr.checkUser().subscribe((data)=>{
      if(!data) this.router.navigate(['']) 
      else{
        this.loading--
        this.user = data
      }
    }, ()=>{
      this.loading--
    })
  
    this.bookSr.checkBooks().subscribe(()=>{
      this.loading--
    }, ()=>{
      this.loading--
    })
  }

}
