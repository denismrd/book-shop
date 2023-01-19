import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[outsideClick]'
})
export class GlobClickDirective {
  @Output() outsideClick = new EventEmitter()

  constructor(private currentEl : ElementRef) { }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(e:any){
    if(!this.currentEl.nativeElement.contains(e.target)) this.outsideClick.emit();
  }
}
