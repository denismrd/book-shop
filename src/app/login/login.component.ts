import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PopupService } from '../popup/popup.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../shared-css/form.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild("form") form:NgForm|undefined;
  userChangeSub:any
  subs:Subscription|undefined;
  constructor(public popup: PopupService, private userSr:UserService, private router:Router) { }

  ngOnInit(): void {
  
  }

  onSubmit(form:NgForm){
    this.popup.trigger.next({type:'loading'})
    this.subs = this.userSr.login(form.value).subscribe((data) => {
      if(data) {
        this.popup.trigger.next({type:'good', data:'Successfully logged in!'})
        this.router.navigate([''])
      } else{
          this.popup.trigger.next({type:'bad', 'data':'Invalid credentials..'})
      }
    })
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe()
  }
}
