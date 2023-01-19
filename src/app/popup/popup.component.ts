import { Component, OnInit } from '@angular/core';
import { PopupService } from './popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  msg = ''
  loading = false
  visible: boolean = false
  timeOut:any
  duration:any = 4000
  color:String = 'orange';
  constructor(public popupSr:PopupService) { }

  ngOnInit(): void {
    this.popupSr.trigger.subscribe((obj)=>{
      this.cancel()
      this.msg = obj.data
      this.visible = true
      if(obj.time != undefined) this.duration = obj.time
      
      switch(obj.type){
        case 'good': this.color = 'green';break;
        case 'normal': this.color = 'orange';break;
        case 'bad' : this.color = 'red'; break;
        case 'loading': this.loading = true; this.duration = 0
      }

      if(this.duration)
        this.timeOut = setTimeout(()=>{
          this.cancel()
        }, 4000)
    })
  }

  cancel(){
    this.duration = 4000
    this.color = 'orange'
    this.visible = false
    this.loading = false
    clearTimeout(this.timeOut)
  }

}
