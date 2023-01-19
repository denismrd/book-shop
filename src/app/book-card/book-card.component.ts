import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '../popup/popup.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  showBack = false;
  
  @Input() book:any = null
  user:any = {data:null}
  constructor( private userSr: UserService, private popupSr:PopupService) { }

  ngOnInit(): void {
    this.user = this.userSr.user
  }

  getCopy(){
    return {
      ...this.user.data,
      Completed : this.user.data.Completed.slice(),
      WishList : this.user.data.WishList.slice(),
    }
  }
  updateUser(obj:any, successMsg:string){
    this.popupSr.trigger.next({type:'loading'})
    this.userSr.updateUser(obj).subscribe((data)=>{
      this.popupSr.trigger.next({type:'good', data: successMsg})
    })
  }
  addCom(){
    let userCopy = this.getCopy() 
    userCopy.Completed.push(this.book.id)
    this.updateUser(userCopy, 'Book added to completed list')
  }

  addWl(){
    let userCopy = this.getCopy() 
    userCopy.WishList.push(this.book.id)
    this.updateUser(userCopy, 'Book added to wishlist')
  }

  remCom(){
    let userCopy = this.getCopy() 
    userCopy.Completed.splice(
      userCopy.Completed.indexOf(this.book.id), 1
    )
    this.updateUser(userCopy, 'Book removed from completed list')
  }

  remWl(){
    let userCopy = this.getCopy() 
    userCopy.WishList.splice(
      userCopy.WishList.indexOf(this.book.id), 1
    )
    this.updateUser(userCopy, 'Book removed from wishlist')
  }

}
