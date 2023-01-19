import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userSr:UserService, private router:Router) { }

  user:any = {data:null}

  ngOnInit(): void {
    this.user = this.userSr.user
  }

  onLogout(){
    this.userSr.logout()
    this.router.navigate([""])
  }

}
