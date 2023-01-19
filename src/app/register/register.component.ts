import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopupService } from '../popup/popup.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../shared-css/form.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userSr:UserService, private popupSr:PopupService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    this.popupSr.trigger.next({type:'loading'})
    this.userSr.register(form.value).subscribe(()=>{
      this.popupSr.trigger.next({type:'good', data:"Successfully registered..!"})
      this.router.navigate([""])
    })
  }

}
