import { Component, OnInit } from '@angular/core';
import { OnlineStatusService } from 'ngx-online-status';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  online = this.onlineSr.getStatus()
  constructor(private onlineSr : OnlineStatusService){}

  ngOnInit(): void {
    this.onlineSr.status.subscribe(st=>{
      if(st) location.reload()
      this.online = st
    })
  }
}
